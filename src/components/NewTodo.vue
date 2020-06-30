<template>
  <form @submit.prevent="addTodo()" class="col-12 col-lf-6">
      <input v-model="newTodo" placeholder="Enter a new Todo" type="text" class="form-control">
  </form>
</template>

<script>
export default {
    data(){
        return{
            newTodo: ""
        }
    },
    methods: {
        addTodo(){
            if(this.newTodo.length > 1){
                console.log(this.newTodo)
                this.$emit("on-addTodo", this.newTodo)
            }
            this.newTodo = "";
        }
    }
}
</script>

<style>

</style>