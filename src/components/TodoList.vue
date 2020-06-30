<template>
  <div class="container">
      <div class="row">
          <div class="col-12">
             <p class="display-3">
                 Vue Crash Course
             </p> 
          </div>
      </div>
      <div class="row">
          <p>Add create form</p>
      </div>
      <div class="row">
          <div class="col-12 col-lg-6">
              <ul class="list-group">
                  <Todo v-for="(todo, index) in todos" :key="index"
                  :todoString="todo.todoString"
                  :completed="todo.completed"
                  />
              </ul>
          </div>  
      </div>
  </div>
</template>

<script>
import Todo from './Todo';

export default {
    components:{
        Todo
    },
    data(){
        return{
            todos: [
                {todoString: "Make Angular Course", completed : false},
                {todoString: "Cook some food", completed : true},
                {todoString: "Make Youtube videos", completed : true},
                {todoString: "Publish these videos", completed : false},
            ]
        }
    },
    methods: {
        addTodo(newTodo){
            this.todo.push({
                todoString: newTodo,
                completed: false
            });
        },
        toggleTodo(todo){
            todo.completed = !todo.completed;
        },
        editTodo(todo, newTodoString){
            todo.todoString = newTodoString;
        },
        deleteTodo(deleteTodo){
            this.todos = this.todos.filter(
                todo => todo !== deleteTodo);
        },
    },

}
</script>

<style>

</style>