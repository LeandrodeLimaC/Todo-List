<template>
  <div>
    <h1>H</h1>
    <TodoList/>
  </div>  
</template>

<script>
  import TodoList from './components/TodoList';

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
