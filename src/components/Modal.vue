<!-- HTML HERE -->
<template>
    <!--  --------MODAL-------- -->
<div class="wrapper">
    <router-link v-if="props.isComplete" :class="props.isComplete ? 'buttonClass disabled' : 'buttonClass'" to="">Delete(Modal)</router-link>
    <a v-else :class="props.isComplete ? 'buttonClass disabled' : 'buttonClass'" href="#demo-modal">Delete(Modal)</a>
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



/* .wrapper a {
  display: inline-block;
  text-decoration: none;
  padding: 15px;
  background-color: #fff;
  border-radius: 3px;
  text-transform: uppercase;
  color: #585858;
  font-family: 'Roboto', sans-serif;
}
 */
.modal {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(77, 77, 77, .7);
  transition: all .4s;
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

