<script setup lang="ts">
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { useToast } from "vue-toast-notification";

const { withMessage } = helpers;
const toast = useToast();
const runtimeConfig = useRuntimeConfig();

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
  console.log(process.env);

  const isValid = await v$.value.$validate();
  if (!isValid) return;

  try {
    const response = await $fetch(
      `${runtimeConfig.public.API_BASE_URL}/auth/login`,
      {
        method: "POST",
        body: JSON.stringify(loginForm),
      }
    );
  } catch (error: any) {
    console.log(error.data);
    toast.error(error.data.message);
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
        <FormTextInput v-model="loginForm.password" />
      </FormLabel>

      <FormButton> Iniciar sesión </FormButton>
    </form>
  </div>
</template>
