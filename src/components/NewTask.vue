<template>
<div class="add-tasks-container">
        <h1 class="home-title">Add a new Task</h1>
    <div class="add-task-form">
        <div>
            <input type="text" class="input-field" placeholder="add title for your new task..." v-model="name">
        </div>
        <div>
            <textarea name="descr" 
            class="input-field" placeholder="add a description..."
            v-model="description" cols="30" rows="5"></textarea>
        </div>
        <div v-if="showErrorMessage">
            <p class="error-text">{{ errorMessage }}</p>
        </div>
        <div class="add-button-container">
        <button @click="addTask" class="add-button">Add</button>
        </div>
    </div>
</div>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../stores/task"   

const taskStore = useTaskStore();

// variables para los valors de los inputs
const name = ref('');
const description = ref('');

// constant to save a variable that holds an initial false boolean value for the errorMessage container that is conditionally displayed depending if the input field is empty
const showErrorMessage = ref(false);

// const constant to save a variable that holds the value of the error message
const errorMessage = ref(null);
const emit = defineEmits(["addTitle"]);

// Arrow function para crear tareas.
const addTask = async() => {
if(name.value.length < 4 || description.value.length < 4){
    // Primero comprobamos que ningún campo del input esté vacío y lanzamos el error con un timeout para informar al user.

    showErrorMessage.value = true;
    errorMessage.value = "Missing title and description or way too short :(";
    setTimeout(() => {
    showErrorMessage.value = false;
    }, 5000);

} else {
    // Aquí mandamos los valores a la store para crear la nueva Task. Esta parte de la función tenéis que refactorizarla para que funcione con emit y el addTask del store se llame desde Home.vue.
    await taskStore.addTask(name.value, description.value);
    name.value = '';
    description.value = '';
    //Función que hace que se refresque la lista de tareas.
    
    //Aquí hacemos el emit. Home recibirá el emit y llamará a la función getTask(). 
    //Si haces eso, eres la campeona del Valhalla gatuno.

    emit("addTitle") 
}
};

</script>

<style scoped>

.description {
    width: 20px;
}

.add-tasks-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%

}
.home-title {
 font-size: 40px;
 margin-bottom: 0;
}

.input-field {
  background: #f8f8f8;
  border: none;
  border-radius: 30px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  font-size: 16px;
  padding: 10px 20px;
  margin: 10px;
  width: 300px;
}

.add-button {
  width: 30%;
  background: linear-gradient(45deg, #ffffff, #f1f1f1, #d7d7d7);
  border-radius: 50px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  margin-top: 15px;
  padding: 10px 20px;
  display: inline-block;
  cursor: pointer;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
}

.add-button-container {
    display: flex;
    justify-content: center;
}
.add-button:hover {
  background: linear-gradient(45deg, #f5cfe8, #efe0ea, #ffffff);
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);
}

.add-task-form {
    margin: 40px;
}
</style>