<template>

<div class="parent-container">
    <!-- <p class="task-alert">{{task.is_complete ? 'done!' : 'not completed yet'}}</p> -->
  <div :class="props.task.is_complete ? 'cloud-rosa':'cloud-container'">
    <h3 :class="props.task.is_complete ? 'taskCompleted' : '' ">{{ task.title }}</h3>
  </div>
    <h4 class="description-container" :class="props.task.is_complete ? 'taskCompleted' : '' ">{{ task.description }}</h4>

  <div class="task-buttons">
    <button class="complete-button" @click="toggleTask"> {{task.is_complete ? '&#x274C' : '&#x2714'}}</button>
    
    <template  v-if="task.is_complete" >
        <!-- <button class="disabled">Delete {{task.title}} </button> --> 
        <Modal :isComplete="task.is_complete"/>
        <button class="disabled edit-button">✏️</button>
    </template>
    <template  v-else>
        <!-- <button  @click="deleteTask">Delete {{task.title}}</button>  -->
        <Modal :isComplete="task.is_complete" @deleteTask="deleteTask"/>
        <button class="edit-button" @click="inputToggle">✏️ </button> 
    </template>
</div>
    <div class="edit-container" v-if="showInput">
        <div>
            <!-- <p>Insert title</p> -->
            <input class="input-field" type="text" v-model="newTitle" placeholder="Insert new title...">
        </div>
        <div>
            <!-- <p>Insert Description</p> -->
            <textarea name="descr" 
            class="input-field" placeholder="Insert new description..."
            v-model="newDescription" cols="20" rows="3"></textarea>
        </div>
        <div class="absolutePosition" v-if="showErrorMessage">
        <p class="error-text">{{ errorMessage }}</p>
        </div>
        <button class="send-button" @click="sendData">Send Data</button>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import { useTaskStore } from '../stores/task';
import { supabase } from '../supabase';
import Modal from './Modal.vue'

const taskStore = useTaskStore();
const emit = defineEmits(["updateTask"]);

const props = defineProps({
    task: Object,
});

/* -------- TOGGLE -------- */
console.log(props.task);

if (props.task.is_complete === true) {
    console.log("completed")
}

const showInput = ref(false);
const newTitle = ref("");
const newDescription = ref("");

function inputToggle(){
    showInput.value = !showInput.value;
}


// Función para borrar la tarea a través de la store. El problema que tendremos aquí (y en NewTask.vue) es que cuando modifiquemos la base de datos los cambios no se verán reflejados en el v-for de Home.vue porque no estamos modificando la variable tasks guardada en Home. Usad el emit para cambiar esto y evitar ningún page refresh.

const deleteTask = async() => {
    await taskStore.deleteTask(props.task.id);
    emit("updateTask")
};

const showErrorMessage = ref ()
const errorMessage = ref(null);

const sendData = async () => {
    if(newTitle.value.length < 4 || newDescription.value.length < 4){
        
        showErrorMessage.value = true;
        errorMessage.value = "Missing title and description or way too short :(";
        setTimeout(() => {
        showErrorMessage.value = false;
        }, 5000);
    } else {
        await taskStore.editTask(newTitle.value, newDescription.value, props.task.id);
        showInput.value = false;
        emit("updateTask");
        
    }
}

const toggleTask = async() => {
    await taskStore.toggleTask(props.task.id, !props.task.is_complete);
    showInput.value = false;
    emit("updateTask")
    console.log("modifying");
};

const editMessage = async () => {
    if (props.task.is_complete === true){
        
        showErrorMessage.value = true;
        errorMessage.value = "Mark task as uncomplete to edit it :)";
        setTimeout(() => {
        showErrorMessage.value = false;
        }, 5000);
    }
}

/* const isActive = ref(true)
    const markCompleted = {
      active: isActive.value
    }

    return {
      isActive,
      classObject
    } */
</script>

<style>

/* .taskCompleted {
 text-decoration-line: line-through;
 text-decoration-style: wavy;
} */

.disabled {
    opacity: 50%;
}

.parent-container {
  width: 340px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.cloud-container {
    background-image: url('../../public/cloud2.png');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    min-height: 200px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.cloud-rosa {
    background-image: url(../../public/cloud3.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    min-height: 200px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.cloud-container h3 {
    margin: 0;
}

.description-container {
  background-color: #f1f1f1;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 300;
  margin-top: 0;
  padding: 10px 20px;
  display: inline-block;
  cursor: pointer;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3); 
}

.task-buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.complete-button, .edit-button, .send-button {
  border-radius: 50px;
  background: linear-gradient(45deg, #ffffff, #f1f1f1, #d7d7d7);
  border: none;
  font-size: 24px;
  margin-top: 15px;
  padding: 10px 20px;
  display: inline-block;
  cursor: pointer;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
}

.edit-button:hover {
  background: linear-gradient(45deg, #ebcbf3, #ede0ef, #ffffff);
  
}

.complete-button:hover {
    background: linear-gradient(45deg, #b5eacb, #d7ece0, #ffffff);
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);
}

.input-field {
  background-color: #f1f1f1;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 300;
  margin-top: 15px;
  padding: 10px 20px;
  display: inline-block;
  cursor: pointer;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
}

.edit-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.send-button {
    font-size: 14px;
    font-weight: 600;
}

</style>

<!--
**Hints**
1. ref() or reactive() can be used here to store the following, think if you want to store them either individually or
like an object, up to you.

2. Data properties need here are the following: a boolean to store a false**Important variable, a string to store an error,
a string to store the value of the task that the user can edit, an initial false boolean to hide the inputFIeld used to edit
the new task detail or details[this is in reference of the task title and the task description].

3. Store the custom emit events that will be used to call the functions of the homeView for editing, deleting and toggling the
status[completed, not complted] of the taskItem.

4. Function to handle the error with the data properties used to control the error and the the boolean controlling the boolean
empty variable.

5. Function to handle the edit dialogue where the inputField is displayed and the string used to store the value of the
inputField will be used here to save the value as a prop on this function.

6. Function to emmit a custom event emit() that takes 2 parameters a name for the custom event and the value that will be
send via the prop to the parent component. This function can control the toggle completion of the task on the homeview.

7. Function to edit the task information that you decided that the user can edit. This function's body takes in a conditional
that first checks if the value of the task [either title and description or just title] is empty which if true it runs the
function used to handle the error on hint4. Else, the conditional sets the first mentioned boolean data property on hint2
back to its inital boolean value to hide the error message and repeat the same for the data property mentioned 4th on hint2;
a constant that stores an object that holds the oldValue from the prop item and the value of the task coming from the data
property mentioned 3rd on hint2; a custom event emit() that takes 2 parameters a name for the custom event and the value
from the object used on this part of the conditional and lastly this part of the conditional sets the value of input field
to an empty string to clear it from the ui.

8. Function to emmit a custom event emit() that takes 2 parameters a name for the custom event and the value that will be
send via the prop to the parent component. This function can control the removal of  the task on the homeview.
-->
