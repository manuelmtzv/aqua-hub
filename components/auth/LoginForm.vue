<script setup lang="ts">
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { useToast } from "vue-toast-notification";

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
  <form @submit.prevent="handleSubmit" class="auth-form">
    <h2 class="text-center font-semibold text-xl">Iniciar sesión</h2>

    <FormLabel
      label="Identificador:"
      :error="v$.identifier.$errors.at(0)?.$message"
    >
      <FormTextInput
        v-model="loginForm.identifier"
        placeholder="Su correo o nombre de usuario."
      />
    </FormLabel>

    <FormLabel label="Contraseña:" :error="v$.password.$errors.at(0)?.$message">
      <FormTextInput
        v-model="loginForm.password"
        type="password"
        placeholder="Su contraseña."
      />
    </FormLabel>

    <p class="text-xs font-medium">
      ¿Todavía no tiene una cuenta? Le invitamos a
      <nuxt-link class="font-semibold" to="/auth/register">registrase</nuxt-link
      >.
    </p>

    <FormButton class="button--black mt-2"> Ingresar </FormButton>
  </form>
</template>
