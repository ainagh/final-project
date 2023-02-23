<!-- HTML HERE -->
<template>
    <Nav />
    <div class="container">
     <h1 class="title">Timer</h1>
     <h3>Track your study sessions!</h3>
     <div class="timer">
        <svg
        width="163"
        height="165"
        viewBox="-8 -8 184 188"
        fill="none"
        id="first-segment"
      >
        <path
          stroke="#8B828C"
          stroke-width="15"
          stroke-linecap="round"
          d="M165.16,163.38A172,172,0,0,0,0,0"
        />
        <path
          id="top-right"
          stroke="#634b66"
          stroke-width="15"
          stroke-linecap="round"
          d="M165.16,163.38A172,172,0,0,0,0,0"
        />
      </svg>
      <svg
        width="163"
        height="165"
        viewBox="-8 -8 184 188"
        fill="none"
        id="second-segment"
      >
        <path
          stroke="#8B828C"
          stroke-width="15"
          stroke-linecap="round"
          d="M0,163.34A172,172,0,0,0,164.44,0"
        />
        <path
          id="bottom-right"
          stroke="#634b66"
          stroke-width="15"
          stroke-linecap="round"
          d="M0,163.34A172,172,0,0,0,164.44,0"
        />
      </svg>
      <svg
        width="163"
        height="165"
        viewBox="-8 -8 184 188"
        fill="none"
        id="third-segment"
      >
        <path
          stroke="#8B828C"
          stroke-width="15"
          stroke-linecap="round"
          d="M0,0A172,172,0,0,0,165.16,162.61"
        />
        <path
          id="bottom-left"
          stroke="#634b66"
          stroke-width="15"
          stroke-linecap="round"
          d="M0,0A172,172,0,0,0,165.16,162.61"
        />
      </svg>
      <svg
        width="163"
        height="165"
        viewBox="-8 -8 184 188"
        fill="none"
        id="fourth-segment"
      >
        <path
          stroke="#8B828C"
          stroke-width="15"
          stroke-linecap="round"
          d="M160.17,0A172,172,0,0,0,0,161.51"
        />
        <path
          id="top-left"
          stroke="#634b66"
          stroke-width="15"
          stroke-linecap="round"
          d="M160.17,0A172,172,0,0,0,0,161.51"
        />
      </svg>
    <p class="minutes-timer">25:00</p>
     </div>
     <button>Start!</button>
    </div>
  <Footer />
</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";
import Nav from '../components/Nav.vue';
import Footer from '../components/Footer.vue';
</script>
<!-- CSS HERE -->
<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 9%;
}

.timer {
  z-index: -1;
}

h1 {
    font-size: 40px;
    margin-right: 10px;
}

h3 {
  margin: 0;
}

.title {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.timer {
    position: relative;
    margin-top: 70px;
    width: 330px;
    height: 330px;
}

#first-segment {
  position: absolute;
  top: 0px;
  right: 0px;
}
#second-segment {
  position: absolute;
  bottom: 0px;
  right: 0px;
}
#third-segment {
  position: absolute;
  bottom: 0px;
  left: 0px;
}
#fourth-segment {
  position: absolute;
  top: 0px;
  left: 0px;
}
.minutes-timer {
  position: absolute;
  top: 31%;
  left: 51%;
  transform: translate(-50%, -50%);
  font-size: 58px;
  color: #634b66;
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