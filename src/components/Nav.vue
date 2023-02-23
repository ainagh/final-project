<template>
  <nav class="nav-menu">
    <!-- <PersonalRouter :route="route" :buttonText="buttonText" class="logo-link"/> -->
    <p class="nav-cloud">&#x2601</p>
    <ul class="nav-ul">
      <li>
        <router-link to="/"> My Tasks </router-link>
      </li>
      <li>
        <router-link to="/music">Background Music</router-link>
      </li>
      <li>
        <router-link to="/timer">Timer</router-link>
      </li>
    </ul>
      <ul>
       <!--  <li class="log-out-welcome">
          <p>Welcome, user</p>
        </li> -->
        <li>
          <button @click="signOut" class="logout-button">Log out</button>
        </li>
      </ul>
  </nav>
  <div class="all-hamburguer">
    <div class="hamburguer-wrap">
      <div class="hamburguer" @click="miFuncion">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
      </div>
   </div>
  <div class="container-fluid" id="app">
    <div class="row dropdown" :class="{ 'dropdown-after' : menuOpen }">
     <ul class="navlist">
      <li class="navlistitem">
        <router-link to="/">My Tasks</router-link>
      </li>
      <li class="navlistitem">
        <router-link to="/music">Background Music</router-link>
      </li>
      <li class="navlistitem">
        <router-link to="/timer">Timer</router-link>
      </li>
      <li class="logout-hamburguer">
          <button @click="signOut" class="logout-button">Log out</button>
        </li>
    </ul>
    </div>
    </div>
  </div>
</template>

<script setup>
// import PersonalRouter from "./PersonalRouter.vue";
import { useUserStore } from "../stores/user";
import { useRouter } from "vue-router";
import { ref, reactive, computed } from "vue";

//constant to save a variable that will hold the use router method
const route = "/";
const buttonText = "Todo app";

// constant to save a variable that will get the user from store with a computed function imported from vue
// const getUser = computed(() => useUserStore().user);
const getUser = useUserStore().user;

// constant that calls user email from the useUSerStore
const userEmail = getUser.email;

// async function that calls the signOut method from the useUserStore and pushes the user back to the Auth view.
const redirect = useRouter();

const signOut = async () => {
  try {
    // call the user store and send the users info to backend to signOut
    useUserStore().signOut();
    // then redirect user to the auth/login
    redirect.push({ path: "/auth/login" });
  } catch (error) {}
};

/* const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu"); */

/* hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");

}) */
/* 


console.log("Simple Push"); */


// Hamburguer Menu Logic 
const menuOpen = ref(false); 

const miFuncion = () => {
  console.log("me ha clickadoo");
  menuOpen.value = !menuOpen.value
  console.log(menuOpen.value);
};
</script> 

<!-- --------------STYLE CSS---------------- -->
<style scoped>

.navlist a {
  text-decoration: none;
  font-weight: 600;
  font-size: 20px;
}

.logout-button {
  border-radius: 50px;
  background: linear-gradient(45deg, #f5cfe8, #efe0ea, #ffffff);
  border: none;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 20px;
  display: inline-block;
  cursor: pointer;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
}

.logout-button:hover {
  background: linear-gradient(45deg, #ffffff,  #efe0ea, #f5cfe8);
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);
}

</style>