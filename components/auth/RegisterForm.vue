<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { useToast } from "vue-toast-notification";

const { t } = useI18n();
const localePath = useLocalePath();
const { withMessage } = helpers;
const { register } = useAuth();
const toast = useToast();
const $colorMode = useColorMode();

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
    required: withMessage(t("authNameRequired"), required),
  },
  lastname: {
    required: withMessage(t("authLastnameRequired"), required),
  },
  username: {
    required: withMessage(t("authUsernameRequired"), required),
  },
  email: {
    required: withMessage(t("authEmailRequired"), required),
  },
  birthdate: {
    required: withMessage(t("authBirthdateRequired"), required),
  },
  password: {
    required: withMessage(t("authIdentifierRequired"), required),
  },
};

const v$ = useVuelidate(rules, registerForm);

async function handleSubmit() {
  const isValid = await v$.value.$validate();
  if (!isValid) return;

  try {
    await register(registerForm);
    toast.success(t("registerSuccess"));

    await navigateTo(localePath("/app"));
  } catch (error) {
    toast.error(getError(error));
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="auth-form">
    <h2 class="text-center font-semibold text-xl">Registrarse</h2>

    <FormLabel :label="t('authName')" :error="v$.name.$errors.at(0)?.$message">
      <FormTextInput
        v-model="registerForm.name"
        :placeholder="t('authNamePlaceholder')"
      />
    </FormLabel>

    <FormLabel
      :label="t('authLastname')"
      :error="v$.lastname.$errors.at(0)?.$message"
    >
      <FormTextInput
        v-model="registerForm.lastname"
        :placeholder="t('authLastnamePlaceholder')"
      />
    </FormLabel>

    <FormLabel
      :label="t('authUsername')"
      :error="v$.username.$errors.at(0)?.$message"
    >
      <FormTextInput
        v-model="registerForm.username"
        :placeholder="t('authUsernamePlaceholder')"
      />
    </FormLabel>

    <FormLabel
      :label="t('authEmail')"
      :error="v$.email.$errors.at(0)?.$message"
    >
      <FormTextInput
        v-model="registerForm.email"
        :placeholder="t('authEmailPlaceholder')"
      />
    </FormLabel>

    <FormLabel
      :label="t('authBirthdate')"
      :error="v$.birthdate.$errors.at(0)?.$message"
    >
      <VueDatePicker
        v-model="registerForm.birthdate"
        :enable-time-picker="false"
        :placeholder="t('authBirthdatePlaceholder')"
      />
    </FormLabel>

    <FormLabel
      :label="t('authPassword')"
      :error="v$.password.$errors.at(0)?.$message"
    >
      <FormTextInput
        v-model="registerForm.password"
        type="password"
        :placeholder="t('authPasswordPlaceholder')"
      />
    </FormLabel>

    <p class="text-xs font-medium">
      {{ t("registerAlready") }}
      <nuxt-link class="font-semibold" to="/auth/login">{{
        t("registerAlreadyLink")
      }}</nuxt-link
      >.
    </p>

    <FormButton class="button--black">{{ t("registerSubmit") }}</FormButton>
  </form>
</template>

<style>
.dp__pointer {
  @apply border dark:bg-dark-800 dark:border-[#464646];
}
</style>
