<template>
  <section class="modal-mask">
    <div class="modal-wrapper">
    <div class="modal-container">
        Are you sure you want to delete this task?
        <div class="modal-buttons">
        <button @click="deleteTaskFunction" class="yes-delete">Yes, delete</button>
        <button @click="closeModalFunction" class="cancel">Cancel</button>
      </div>
    </div>
   </div>
  </section>
</template>

<script setup>

const emits = defineEmits(['deleteTaskEmit', 'closeModalEmit'])

const deleteTaskFunction = () => {
    
    emits("deleteTaskEmit")
}

const closeModalFunction = () => {
    emits("closeModalEmit")
}

</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  transition: opacity 0.3s ease;
  align-items: center;
  justify-content: center;
}
.modal-wrapper {
 /*  display: table-cell;
  vertical-align: middle; */
  display: flex;
  justify-content: center;
}
.modal-container {
  /* width: 300px;
  margin: 0px auto;
  padding: 20px 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.33);
  transition: all 0.3s ease; */

  border-radius: 20px;
  position: relative;
  max-width: 76%;
  background: linear-gradient(45deg, #c5c4c4, #f1f1f1, #afaeae);
  padding: 30px 50px 20px 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.modal-enter,
.modal-leave {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave .modal-container {
  transform: scale(1.1);
}
.modal-buttons {
  gap: 30px;
  display: flex;
  justify-content: space-evenly;

}
.yes-delete, .cancel {
  background-color: #ffffff;
  border-radius: 50px;
  border: none;
  font-size: 16px;
  margin-top: 15px;
  margin-bottom: 10px;
  padding: 10px 20px;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
}

.yes-delete:hover , .cancel:hover{
  background: linear-gradient(45deg, #f2ddeb, #ece3e9, #eed8e7);
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);
}
</style>
