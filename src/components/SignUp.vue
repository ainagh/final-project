<template>
  <div class="container">

    <div class="header">
      <h1 class="header-icon">&#x2601</h1>
      <div class="header-description">
        <h3 class="header-title">Register to xxxx</h3>
        <p class="header-subtitle">Start organizing your study sessions</p>
      </div>
    </div>

    <form @submit.prevent="signUp" class="form-sign-in">
      <div class="form">
        <div class="form-input">
          <label class="input-field-label"></label>
          <input
            type="email"
            class="cloud-input"
            placeholder="example@gmail.com"
            id="email"
            v-model="email"
            required
          />
        </div>
        <div class="form-input">
          <label class="input-field-label"></label>
          <input
            type="password"
            class="cloud-input"
            placeholder="New password"
            id="password"
            v-model="password"
            required
          />
        </div>
        <div class="form-input">
          <label class="input-field-label"></label>
          <input
            type="password"
            class="cloud-input"
            placeholder="Confirm password"
            id="confirmPassword"
            v-model="confirmPassword"
            required
          />
        </div>
        <div class="sign-in-container">
        <button class="cloud-button" type="submit">Sign Up</button>
      </div>
        <p class="sign-up"> 
          Do you already have an account?
          <PersonalRouter
            :route="route"
            :buttonText="buttonText"
            class="sign-up-link"
          />
        </p>
      
      </div>
    </form>

    <div v-show="errorMsg">{{errorMsg}}</div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import PersonalRouter from "./PersonalRouter.vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";

// Route Variables
const route = "/auth/login";
const buttonText = "Sign In";

// Input Fields
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

// Error Message
const errorMsg = ref("");

// Router to push user once SignedUp to Log In
const redirect = useRouter();

// Arrow function to SignUp user to supaBase with a timeOut() method for showing the error
const signUp = async () => {
  if (password.value === confirmPassword.value) {
    try {
      // calls the user store and send the users info to backend to logIn
      await useUserStore().signUp(email.value, password.value);
      // redirects user to the homeView
      redirect.push({ path: "/auth/login" });
    } catch (error) {
      // displays error message
      errorMsg.value = error.message;
      // hides error message
      setTimeout(() => {
        errorMsg.value = null;
      }, 5000);
    }
    return;
  }
  errorMsg.value = "error";
};
</script>

<style scoped>
.container {
  margin-top: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.header-icon {
 font-size: 100px;
 margin-bottom: 0;
}
.header-title {
  font-size: 40px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
}

.header-subtitle {
  font-size: 20px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
}

.cloud-input {
  background: #f8f8f8;
  border: none;
  border-radius: 30px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  font-size: 16px;
  padding: 10px 20px;
  margin: 10px;
  width: 300px;
}
.cloud-input:focus {
  outline: none;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3)
}

.cloud-button {
  width: 30%;
  background: linear-gradient(45deg, #ffffff, #f1f1f1, #d7d7d7);
  border-radius: 50px;
  border: none;
  font-size: 16px;
  margin-top: 15px;
  padding: 10px 20px;
  display: inline-block;
  cursor: pointer;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
}

.cloud-button:hover {
  background: linear-gradient(45deg, #d7d7d7, #f1f1f1, #ffffff);
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);
}

.sign-up {
  padding: 30px;
  margin-bottom: 200px;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.sign-in-container {
  display: flex;
  justify-content: center;
}

p a {
  color: #643F55;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
}
</style>
