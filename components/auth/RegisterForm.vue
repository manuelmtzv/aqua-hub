<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { useToast } from "vue-toast-notification";

const { withMessage } = helpers;
const { register } = useAuth();
const toast = useToast();

const registerForm = reactive({
  name: "",
  lastname: "",
  username: "",
  email: "",
  birthdate: "",
  password: "",
});

const rules = {
  name: {
    required: withMessage("El nombre es requerido", required),
  },
  lastname: {
    required: withMessage("El apellido es requerido", required),
  },
  username: {
    required: withMessage("El nombre de usuario es requerido", required),
  },
  email: {
    required: withMessage("El correo es requerido", required),
  },
  birthdate: {
    required: withMessage("La fecha de nacimiento es requerida", required),
  },
  password: {
    required: withMessage("La contraseña es requerida", required),
  },
};

const v$ = useVuelidate(rules, registerForm);

async function handleSubmit() {
  const isValid = await v$.value.$validate();
  if (!isValid) return;

  try {
    await register();
    toast.success("Usuario registrado correctamente");

    await navigateTo("/feed");
  } catch (error) {
    toast.error(getError(error));
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="auth-form">
    <h2 class="text-center font-semibold text-xl">Registrarse</h2>

    <FormLabel label="Nombre:" :error="v$.name.$errors.at(0)?.$message">
      <FormTextInput v-model="registerForm.name" placeholder="Su nombre." />
    </FormLabel>

    <FormLabel label="Apellido:" :error="v$.lastname.$errors.at(0)?.$message">
      <FormTextInput
        v-model="registerForm.lastname"
        placeholder="Su apellido."
      />
    </FormLabel>

    <FormLabel
      label="Nombre de usuario:"
      :error="v$.username.$errors.at(0)?.$message"
    >
      <FormTextInput
        v-model="registerForm.username"
        placeholder="Su nombre de usuario."
      />
    </FormLabel>

    <FormLabel label="Correo:" :error="v$.email.$errors.at(0)?.$message">
      <FormTextInput v-model="registerForm.email" placeholder="Su correo." />
    </FormLabel>

    <FormLabel
      label="Fecha de nacimiento:"
      :error="v$.birthdate.$errors.at(0)?.$message"
    >
      <VueDatePicker
        v-model="registerForm.birthdate"
        :enable-time-picker="false"
        placeholder="Su fecha de nacimiento."
      />
    </FormLabel>

    <FormLabel label="Contraseña:" :error="v$.password.$errors.at(0)?.$message">
      <FormTextInput
        v-model="registerForm.password"
        type="password"
        placeholder="Su contraseña."
      />
    </FormLabel>

    <p class="text-xs font-medium">
      ¿Ya tiene una cuenta? Le invitamos a
      <nuxt-link class="font-semibold" to="/auth/login"
        >iniciar sesión</nuxt-link
      >.
    </p>

    <FormButton class="button--black">Registrarse</FormButton>
  </form>
</template>
