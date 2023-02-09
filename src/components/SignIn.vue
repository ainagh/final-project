<!-- COMPONENTE BOILERPLATE -->
 
  <template>

  <div class="container">
    <h3 class="header-title">Log In to ToDo App</h3>
    <p class="header-subtitle">Estamos en la ruta de login. Aquí deberíais crear un form con la lógica correspondiente para que este permita al usuario loguearse con su email y su contraseña. Miraros la lógica de SignUp si necesitáis inspiración :)</p>

   <div class="sign-in-form">
    <form @submit.prevent="signIn">
    <input type="email" class=""
            placeholder="example@gmail.com"
            id="email"
            v-model="email"
            required/> <br>
    <input type="password"
            class=""
            placeholder="**********"
            id="password"
            v-model="password"
            required/> <br>
    <button class="button" type="submit">Sign In</button>
    <p>Don't have an account? <PersonalRouter :route="route" :buttonText="buttonText" class="sign-up-link"/></p>
  </form>
  <p v-if="aviso">Email or Password not correct</p>
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

<style></style>
