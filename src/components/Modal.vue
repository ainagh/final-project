<!-- HTML HERE -->
<template>
    <!--  --------MODAL-------- -->
<div class="wrapper">
    <router-link class="delete-button common-button" v-if="props.isComplete" :class="props.isComplete ? 'buttonClass disabled' : 'buttonClass'" to="">&#x1F5D1</router-link>
    <a class="delete-button" v-else :class="props.isComplete ? 'buttonClass disabled' : 'buttonClass'" href="#demo-modal">&#x1F5D1</a>
</div>
<div id="demo-modal" class="modal">
    <div class="modal__content">
        <h1>Are you sure you want to delete?</h1>
        <p>
            It's going to be gone forever...
        </p>
        <a href="#" class="modal__close">&times;</a>
        <button @click="deleteTaskModal">Yes, delete it</button>
    </div>
</div>
</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";

const props = defineProps ({
    isComplete: Boolean,
});

const emit = defineEmits(["deleteTask"])

const deleteTaskModal = () => {
    emit ("deleteTask")
};


</script>

<!-- CSS HERE -->
<style scoped>

.disabled {
    opacity: 50%;
}


.buttonClass {
    padding: 5px;
}

.delete-button {
  background: linear-gradient(45deg, #ffffff, #f1f1f1, #d7d7d7);
  border-radius: 50px;
  border: none;
  font-size: 24px;
  margin-top: 15px;
  padding: 10px 20px;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
}

.delete-button:hover {
  background: linear-gradient(45deg, #f18e8e, #f8d0d0, #ffffff);
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);
}

.delete-button:visited {
  color: black;
}

#demo-modal {
  height: 100%;
}
.modal {
  visibility: hidden;
  opacity: 0;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(77, 77, 77, .7);
  transition: all .4s;
  font-size: 16px;
}

.modal:target {
  visibility: visible;
  opacity: 1;
}

.modal__content {
  border-radius: 4px;
  position: relative;
  width: 500px;
  max-width: 90%;
  background: #fff;
  padding: 1em 2em;
}
.modal__close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #585858;
  text-decoration: none;
}</style>

