<template>
  <v-app id="inspire">
    <v-container fluid>
      <v-row  
        align="center"
        justify="center">
        <TodoList/>
      </v-row>
    </v-container>  
  </v-app>
</template>

<script>
import TodoList from "./components/TodoList";
  export default {
    name: "App",
    components: {
      TodoList
    }
  }
</script>

<style>
  body{
    background-color: rgb(66, 66, 66);
    color: aliceblue;
  }
</style>
