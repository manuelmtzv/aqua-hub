<script setup lang="ts">
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { useToast } from "vue-toast-notification";
import type { LoginResponse } from "~/types/Auth";
import { getError } from "~/utils/getError";

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
  const isValid = await v$.value.$validate();
  if (!isValid) return;

  try {
    const response = await $fetch<LoginResponse>(
      `${runtimeConfig.public.API_BASE_URL}/auth/login`,
      {
        method: "POST",
        body: JSON.stringify(loginForm),
      }
    );

    const token = useCookie("token", {
      maxAge: Number(response.expiresIn),
    });

    token.value = response.token;
  } catch (error: any) {
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
        <FormTextInput v-model="loginForm.password" />
      </FormLabel>

      <FormButton> Iniciar sesión </FormButton>
    </form>
  </div>
</template>
