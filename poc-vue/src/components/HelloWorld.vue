<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/logo.png">


    <form @submit.prevent="add()">
      <input v-model="task" type="text">
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
    margin-left: 2px;
  }
</style>
