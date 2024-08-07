<script setup lang="ts">
import useVuelidate from "@vuelidate/core";
import { useToast } from "vue-toast-notification";
import { required, helpers } from "@vuelidate/validators";

const { withMessage } = helpers;
const { login } = useAuth();
const toast = useToast();

const loginForm = reactive({
  identifier: "",
  password: "",
});

const rules = {
  identifier: {
    required: withMessage("El correo o usuario es requerido", required),
  },
  password: {
    required: withMessage("La contraseña es requerida", required),
  },
};

const v$ = useVuelidate(rules, loginForm);

async function handleSubmit() {
  const isValid = await v$.value.$validate();
  if (!isValid) return;

  try {
    await login(loginForm);
    toast.success("Sesión iniciada correctamente");

    await navigateTo("/feed");
  } catch (error) {
    toast.error(getError(error));
  }
}
</script>

<template>
  <div>
    <form @submit.prevent="handleSubmit">
      Iniciar sesión

      <FormLabel
        label="Correo o nombre de usuario:"
        :error="v$.identifier.$errors.at(0)?.$message"
      >
        <FormTextInput v-model="loginForm.identifier" />
      </FormLabel>

      <FormLabel
        label="Contraseña:"
        :error="v$.password.$errors.at(0)?.$message"
      >
        <FormTextInput v-model="loginForm.password" type="password" />
      </FormLabel>

      <FormButton> Iniciar sesión </FormButton>
    </form>
  </div>
</template>
