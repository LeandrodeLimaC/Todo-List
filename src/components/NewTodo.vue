<template>
  <form @submit.prevent="addTodo()" class="px-4">
    <v-text-field
      v-model="newTodo"
      label="Add task..."
      outlined
      dense
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.length > 1) {
        this.$emit("on-addTodo", this.newTodo);
      }
      this.newTodo = "";
    },
  },
};
</script>

<style>
</style>