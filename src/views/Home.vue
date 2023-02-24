<template>
  <div class="wrapper">
    <Nav />
    <div class="date">
     <h4>{{ date }}</h4>
    </div>
    <img class="cloud-1" src="../../public/cloud.png" alt="cloud">
    <img class="cloud-2" src="../../public/cloud.png" alt="cloud">
    <img class="cloud-3" src="../../public/cloud.png" alt="cloud">
    <img class="cloud-4" src="../../public/cloud.png" alt="cloud">
    <img class="cloud-5" src="../../public/cloud.png" alt="cloud">
    <NewTask @addTitle="getTasks"/>
    <h1>Tasks</h1>
    <div class="all-tasks">
    <TaskItem v-for="task in tasks" :key="task.id" :task="task" @updateTask="getTasks"/>
  </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref, onUpdated } from 'vue'
import { useTaskStore } from "../stores/task";
import { useRouter } from 'vue-router';
import Nav from '../components/Nav.vue';
import NewTask from '../components/NewTask.vue';
import TaskItem from '../components/TaskItem.vue';
import Footer from '../components/Footer.vue';
import moment from 'moment'

const taskStore = useTaskStore();

// USING MOMENT LIBRARY
const time = moment().format('dddd, Do of MMMM YYYY')
const date = ref(`Today is ${time}`)

const testFunc = () => {
  const time = moment().format('MMMM Do YYYY, h:mm:ss a')
 }

console.log(testFunc());

// Variable para guardar las tareas de supabase
const tasks = ref([]);

// Creamos una función que conecte a la store para conseguir las tareas de supabase
const getTasks = async() => {
  tasks.value = await taskStore.fetchTasks();
};

getTasks();

</script>

<style scoped>

h1 {
  font-size: 40px;
  text-align: center;
  margin-bottom: 0;
}
.all-tasks {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.date {
  display: flex;
  justify-content: center;
  margin-top: 8vh;
}

.cloud-1 {
  position: absolute;
  margin-top: 4vh;
  margin-left: 16vh;
  width: 160px;
  border-radius: 50%;
  z-index: -1;
}
.cloud-2 {
  position: absolute;
    margin-top: 45vh;
    margin-left: 40vh;
    width: 131px;
    border-radius: 50%;
    z-index: -1;
}
.cloud-3 {
  position: absolute;
    margin-top: -6vh;
    margin-left: 168vh;
    width: 152px;
    border-radius: 50%;
    z-index: 0;
}
.cloud-4 {
  position: absolute;
    margin-top: 27vh;
    margin-left: 145vh;
    width: 103px;
    border-radius: 50%;
    z-index: -1;
}
.cloud-5 {
  position: absolute;
    margin-top: 48vh;
    margin-left: 168vh;
    width: 121px;
    border-radius: 50%;
    z-index: -1;
}

@media (max-width: 1300px ) {
  .cloud-1, .cloud-2, .cloud-3, .cloud-4, .cloud-5 {
    display: none;
  } 
}

</style>

<!-- 
**Hints**
1. ref() is used here!
2. (NewTask, TaskItem, Footer, Nav) components are used here! 
3. Tasks are going to be contained in an array here!
4. An async function is needed to get all of the tasks stored within the supabase database, this async function's body will 
contain the tasks value which be use to store the fetchTasks method which lives inside the userTaskStore. This function 
needs to be called within the setUp script in order to run within the first instance of this component lifecycle.

5. NewTask component will receive a customEvent on this instance of the homeView that will fire the add-to-do function
6. add-to-do function will receive 2 params/arguments that will tak a taskTitle and a taskDescription and the body of this 
async function will call the taskStore that calls the addTask function from the store that pushes the info of the task to the 
backEnd. This is possible by passing the 2 param/arguments that will be passed by the user from the inputs within the NewTask 
Component. 

7. TaskItem component will loop through the tasks-array that will print an individual instance of an individual TaskItem 
component. TaskItem will receive 3 customEvents on this instance of the homeView. 1 customEvent for toggling the task to show 
either a text or an icon to display if the task is completed or not completed. 1 customEevent for removing/deleting the 
task out of the array. 1 customEvent for editing the task title and description. This function needs to call the function 
mentioned on hint4.


7.1-customEvent will fire an async function that will take in 1 param/argument. On the body of this function the param/argument 
will be used to define 2 constants. 1 of this constants will take care of setting the boolean value to the opposite of the 
value that checks wether this task is_complete. 1 of this constants will take of calling the id of this specific task in 
order to call the right id. 
7.2-customEvent will fire an asynf function that will take in 1 param/argument. This async function's body will be used to 
call the deleteTaskmethod which will take the param/argument's id in order to delete the task. This function needs to call 
the function mentioned on hint4. 
7.3-customEvent will fire an async function that will take in 1 param/argument. this async function's body will be used to 
take in 2 constants. 1 constant will take in the param/argument newValue. 1 constant will be used to get the param/argument 
oldValue id. These 2 constants will be sent to the backend via the useTaskStore which holds an editTask method. This function 
needs to call the function mentioned on hint4.
-->
