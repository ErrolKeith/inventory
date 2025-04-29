<template>
  <div class="login-container">
    <form @submit.prevent="attemptToLogin">
      <header>
        <p>Inventory Manager Login</p>
      </header>
      <div class="inputs-container">
        <input
          name="email"
          type="email"
          v-model="userEmail"
          placeholder="Email"
        />
        <input
          name="password"
          type="password"
          v-model="userPassword"
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </div>
      <div class="errors"></div>
    </form>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import useAuth from "../composables/useAuth";

const userEmail = ref("");
const userPassword = ref("");

const { login } = useAuth();
const router = useRouter();

const attemptToLogin = async () => {
  const loginResponse = await login({
    email: userEmail.value,
    password: userPassword.value,
  });

  if (typeof loginResponse === "string") {
    console.error(loginResponse);
    window.alert("Invalid email and password combination.");
    return;
  }

  if (typeof loginResponse === "object") {
    router.push("/materials");
  }
};
</script>
<style scoped>
header {
  text-align: center;
}

.login-container {
  width: 350px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid gray;
  border-radius: 0.6rem;
  padding: 1rem;
}

.inputs-container {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
</style>
