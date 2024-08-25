<script setup lang="ts">
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { useToast } from "vue-toast-notification";

const { withMessage } = helpers;
const { login } = useAuth();
const toast = useToast();
const logging = ref(false);
const { t } = useI18n();
const localePath = useLocalePath();

const loginForm = reactive({
  identifier: "",
  password: "",
});

const rules = {
  identifier: {
    required: withMessage(t("authIdentifierRequired"), required),
  },
  password: {
    required: withMessage(t("authPasswordRequired"), required),
  },
};

const v$ = useVuelidate(rules, loginForm);

async function handleSubmit() {
  const isValid = await v$.value.$validate();
  if (!isValid) return;

  logging.value = true;

  try {
    await login(loginForm);
    toast.success(t("loginSuccess"));

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
    <h2 class="text-center font-semibold text-xl">{{ t("loginTitle") }}</h2>

    <FormLabel
      :label="t('authIdentifier')"
      :error="v$.identifier.$errors.at(0)?.$message"
    >
      <FormTextInput
        v-model="loginForm.identifier"
        :placeholder="t('authIdentifierPlaceholder')"
      />
    </FormLabel>

    <FormLabel
      :label="t('authPassword')"
      :error="v$.password.$errors.at(0)?.$message"
    >
      <FormTextInput
        v-model="loginForm.password"
        type="password"
        :placeholder="t('authPasswordPlaceholder')"
      />
    </FormLabel>

    <p class="text-xs font-medium">
      {{ t("loginNoAccount") }}
      <nuxt-link class="font-semibold" to="/auth/register">{{
        t("loginNoAccountLink")
      }}</nuxt-link
      >.
    </p>

    <FormButton class="button--black mt-2" :disabled="logging">
      {{ t("loginSubmit") }}
    </FormButton>
  </form>
</template>
