<!-- HTML HERE -->
<template>
    <Nav />
    <div class="container">
     <h1 class="title">Pomodoro Timer &#x23F3</h1>
     <div class="timer"></div>
     <button>Start!</button>
    </div>
</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";
import Nav from '../components/Nav.vue';
</script>
<!-- CSS HERE -->
<style scoped>
.container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    font-size: 64px;
    margin-right: 10px;
}
.title {
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.timer {
    position: relative;
    margin-top: 100px;
    width: 330px;
    height: 330px;
}

button {
    margin-top: 50px;
    width: 200px;
    height: 68px;
    background: #634b66;
    color: white;
    font-size: 30px;
    border-radius: 20px;
    /* border: none; */
    cursor: pointer;

}

</style>