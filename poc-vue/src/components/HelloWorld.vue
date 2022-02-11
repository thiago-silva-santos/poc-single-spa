<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/logo.png">


    <form @submit.prevent="add()" class="formVue">
      <input v-model="task" type="text" class="inputVue">
      <button class="add" type="submit"> Adicionar</button>
    </form>

      <div class="tasksContainer">
        <ul> 
          <li class="task" v-for="t in tasks" :key="t"> {{t}} </li>  
          
        </ul>  
      </div>
    
  </div>
</template>

<script>
import * as singleSpa from 'single-spa'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      task: '',
      tasks: []
    }
  },
  methods: {
      changePage(pagina) {
        singleSpa.navigateToUrl(pagina)
      },
      add() {
        if (this.task.trim()) {
          this.tasks.push(this.task)
          this.task = ''
        }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello { 
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
  }
  .formVue {
    display: flex;
    width: 300px;
    align-items: center;
    margin-top: 50px;
  }
  .inputVue {
    height: 20px;
  }
  .tasksContainer {
    margin-top: 50px;
  }
  .task {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
  }

  .add {
    margin-left: 10px;
    width: 80px;
    height: 40px;
    cursor: pointer;
    background-color: rgb(0, 255, 136);
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    border-radius: 15px;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    border: none;
  }
</style>
