<script setup lang="ts">
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { useToast } from "vue-toast-notification";

const { withMessage } = helpers;
const { login } = useAuth();
const toast = useToast();
const logging = ref(false);
const localePath = useLocalePath();
const { t } = useI18n();

const loginForm = reactive({
  identifier: "",
  password: "",
});

const rules = {
  identifier: {
    required: withMessage(t("auth.identifierRequired"), required),
  },
  password: {
    required: withMessage(t("auth.passwordRequired"), required),
  },
};

const v$ = useVuelidate(rules, loginForm);

async function handleSubmit() {
  const isValid = await v$.value.$validate();
  if (!isValid) return;

  logging.value = true;

  try {
    await login(loginForm);
    toast.success(t("auth.loginSuccess"));

    await navigateTo(localePath("/app"));
  } catch (error) {
    toast.error(getError(error));
  } finally {
    logging.value = false;
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="auth-form">
    <h2 class="text-center font-semibold text-xl">
      {{ $t("auth.loginTitle") }}
    </h2>

    <FormLabel
      :label="$t('auth.identifier')"
      :error="v$.identifier.$errors.at(0)?.$message"
    >
      <FormTextInput
        v-model="loginForm.identifier"
        :placeholder="$t('auth.identifierPlaceholder')"
      />
    </FormLabel>

    <FormLabel
      :label="$t('auth.password')"
      :error="v$.password.$errors.at(0)?.$message"
    >
      <FormTextInput
        v-model="loginForm.password"
        type="password"
        :placeholder="$t('auth.passwordPlaceholder')"
      />
    </FormLabel>

    <p class="text-xs font-medium">
      {{ $t("auth.loginNoAccount") }}
      <nuxt-link class="font-semibold" to="/auth/register">{{
        $t("auth.loginNoAccountLink")
      }}</nuxt-link
      >.
    </p>

    <FormButton class="button--black mt-2" :disabled="logging">
      {{ $t("auth.loginSubmit") }}
    </FormButton>
  </form>
</template>
