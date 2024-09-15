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
    required: withMessage(t("auth.nameRequired"), required),
  },
  lastname: {
    required: withMessage(t("auth.lastnameRequired"), required),
  },
  username: {
    required: withMessage(t("auth.usernameRequired"), required),
  },
  email: {
    required: withMessage(t("auth.emailRequired"), required),
  },
  birthdate: {
    required: withMessage(t("auth.birthdateRequired"), required),
  },
  password: {
    required: withMessage(t("auth.identifierRequired"), required),
  },
};

const v$ = useVuelidate(rules, registerForm);

async function handleSubmit() {
  const isValid = await v$.value.$validate();
  if (!isValid) return;

  try {
    await register(registerForm);
    toast.success($t("auth.registerSuccess"));

    await navigateTo(localePath("/app"));
  } catch (error) {
    toast.error(getError(error));
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="auth-form" autocomplete="off">
    <h2 class="text-center font-semibold text-xl">Registrarse</h2>

    <FormLabel
      :label="$t('auth.name')"
      :error="v$.name.$errors.at(0)?.$message"
    >
      <FormTextInput
        v-model="registerForm.name"
        :placeholder="$t('auth.namePlaceholder')"
      />
    </FormLabel>

    <FormLabel
      :label="$t('auth.lastname')"
      :error="v$.lastname.$errors.at(0)?.$message"
    >
      <FormTextInput
        v-model="registerForm.lastname"
        :placeholder="$t('auth.lastnamePlaceholder')"
      />
    </FormLabel>

    <FormLabel
      :label="$t('auth.username')"
      :error="v$.username.$errors.at(0)?.$message"
    >
      <FormTextInput
        v-model="registerForm.username"
        :placeholder="$t('auth.usernamePlaceholder')"
      />
    </FormLabel>

    <FormLabel
      :label="$t('auth.email')"
      :error="v$.email.$errors.at(0)?.$message"
    >
      <FormTextInput
        v-model="registerForm.email"
        :placeholder="$t('auth.emailPlaceholder')"
      />
    </FormLabel>

    <FormLabel
      :label="$t('auth.birthdate')"
      :error="v$.birthdate.$errors.at(0)?.$message"
    >
      <VueDatePicker
        v-model="registerForm.birthdate"
        :enable-time-picker="false"
        :placeholder="$t('auth.birthdatePlaceholder')"
      />
    </FormLabel>

    <FormLabel
      :label="$t('auth.password')"
      :error="v$.password.$errors.at(0)?.$message"
    >
      <FormTextInput
        v-model="registerForm.password"
        type="password"
        :placeholder="$t('auth.passwordPlaceholder')"
      />
    </FormLabel>

    <p class="text-xs font-medium">
      {{ $t("auth.registerAlready") }}
      <nuxt-link class="font-semibold" to="/auth/login">{{
        $t("auth.registerAlreadyLink")
      }}</nuxt-link
      >.
    </p>

    <FormButton class="button--black">{{
      $t("auth.registerSubmit")
    }}</FormButton>
  </form>
</template>

<style>
.dp__outer_menu_wrap {
  @apply dark:bg-dark-800;
}
.dp__pointer.dp__input_readonly {
  @apply border dark:bg-dark-800 dark:border-[#464646];
}
</style>
