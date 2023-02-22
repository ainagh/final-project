<!-- COMPONENTE BOILERPLATE -->
 
  <template>

  <div class="container">
    <h1 class="header-icon">&#x2601</h1>
    <h3 class="header-title">Welcome to xxxx</h3>
    <p class="header-subtitle">Come have a peaceful study session</p>

   <div class="sign-in-form">
    <form @submit.prevent="signIn" class="sign-in-form">
    <input type="email" class="cloud-input"
            placeholder="example@gmail.com"
            id="email"
            v-model="email"
            required/> <br>
    <input type="password"
            class="cloud-input"
            placeholder="**********"
            id="password"
            v-model="password"
            required/> <br>
    <p class="incorrect-alert" v-if="aviso">Email or Password not correct</p>
   <div class="sign-in-container">
    <button class="cloud-button" type="submit">Sign In</button>
  </div>
    <p class="sign-up">First time here?  <PersonalRouter :route="route" :buttonText="buttonText" class="sign-up-link"/> </p>
  </form>
  </div>
  </div>

</template>

<script setup>
import { ref } from "vue";
import PersonalRouter from "./PersonalRouter.vue";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { advancePositionWithClone } from "@vue/compiler-core";

// Route Variables
const route = "/auth/signup";
const buttonText = "Sign Up";

// Arrow function to Signin user to supaBase
/* const signIn = async () => {
  try {} catch (error) {}
}; */
const redirect = useRouter();
const email = ref("");
const password = ref("");
const aviso = ref (false)

const signIn = async () => {
  console.log("first")
  if (email.value) {
  try {
    await useUserStore().signIn(email.value, password.value)
    redirect.push ({ path: "/"})

  } catch (error) {
    aviso.value = true
    setTimeout(() => {
      aviso.value = false
    }, 10000);
    throw error;
  }
  }
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

.header-icon {
 font-size: 100px;
 margin-bottom: 0;
}
.header-title {
  font-size: 40px;
  margin-bottom: 10px;
}

.header-subtitle {
  font-size: 20px;
  margin-bottom: 50px;
}

.sign-in-form {
  display: flex;
  flex-direction: column;
}
.sign-in-container {
  display: flex;
  justify-content: center;
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
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
}
.sign-up {
 padding-top: 40px;
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 10px;
 margin-bottom: 200px;
}

p a {
  color: #643F55;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
}

.incorrect-alert {
  margin: 0;
  margin-bottom: 20px;
  text-align: center;
  color: #ED6A5A;
  font-weight: 700;
}



</style>

