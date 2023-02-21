<template>
  <nav class="nav-menu">
    <!-- <PersonalRouter :route="route" :buttonText="buttonText" class="logo-link"/> -->
    <router-link to="/"> Home </router-link>

    <ul>
      <li>
        <router-link to="/account">Your Account</router-link>
      </li>
    </ul>
    <ul>
      <li>
        <router-link to="/timer">Timer</router-link>
      </li>
    </ul>
    <ul>
      <li>
        <router-link to="/music">Music</router-link>
      </li>
    </ul>

    <div>
      <ul>
        <li class="log-out-welcome">
          <p>Welcome, user</p>
        </li>
        <li>
          <button @click="signOut" class="button">Log out</button>
        </li>
      </ul>
    </div>
  </nav>
  <div class="hamburguer" @click="miFuncion">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </div>
 <!--  TEST --> 
 <div class="container-fluid" id="app">
<!--   <nav class="row navbar">
     <div class="col-xs-6">
      <div class="hamburger-wrap">
        <button class="hamburger" type="button" @click="miFuncion">
          <span class="hamburger__line"></span>
          <span class="hamburger__middle"></span>
          <span class="icon-bar hamburger__line"></span>          
        </button>
      </div>
    </div> 
  </nav> -->
  <div class="row dropdown" :class="{ 'dropdown-after' : menuOpen }">
    <ul class="navlist">
      <li class="navlistitem">
        <a href="#">home</a>
      </li>
      <li class="navlistitem">
        <a href="#">about</a>
      </li>
      <li class="navlistitem">
        <a href="#">contact</a>
      </li>
    </ul>
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
.navbar {
  height: 50px;
  background-color: #F3DBE0;
  display: flex;
  border-radius: 0px;
}

.hamburguer-wrap {
  width: 100px;
  height: 50%;
  margin-left: 50px;
  margin-right: 50px;
  display: flex;
  align-items: center;
}

.hamburguer-wrap {
  float: right;
  justify-content: flex-end;
}

.hamburguer {
  width: 45px;
  height: 45px;
}

/* .hamburguer:focus {
  outline: none;
} */

/* .hamburguer__line,
.hamburguer__middle {
  display: block;
  width: 30px;
  height: 2px;
  border-radius: 2px;
  background-color: #FFFFFF;
  margin-top: 7px;
  margin-bottom: 7px;
} */

/* .hamburguer__middle {
  width: 20px;
  margin-left: 10px;
} */

.dropdown {
  margin-top: 20px;
  height: 0px;
  background-color: #F3DBE0;
  transition: height 0.2s ease;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  overflow: hidden;
}

.dropdown-after {
  height: calc(30vh - 10px);
  transition: height 0.2s ease;
}

.navlist {
  list-style: none;
}

.navlistitem {
  text-transform: uppercase;
  text-align: center;
  padding: 20px;
}

.navlistitem a {
  color: black;
}
</style>