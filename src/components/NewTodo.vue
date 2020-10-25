<template>
  <v-form @submit.prevent="addTodo()" class="pa-0" style="width:100%">
    <v-text-field
    rounded
      v-model="newTodo"
      label="Add a task..."
      outlined
      hide-details
      prepend-inner-icon="mdi-menu-open"
    />
  </v-form>
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

<style scoped>
>>> .v-input__prepend-inner {
    margin-right: auto;
    padding-right: 8px!important;
}
</style>