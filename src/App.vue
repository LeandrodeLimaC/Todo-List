<template>
  <v-app>
    <v-container fluid class="pa-0" style="
    height: 100vh;
    display: flex;
    flex-flow: column;
">
      <v-row align="center" justify="center">
        <v-col sm="12" md="6" lg="4">
          <todo-list />
        </v-col>
      </v-row>
      
    </v-container>
  </v-app>
</template>

<script>
import TodoList from "./components/TodoList";
export default {
  name: "App",
  components: {
    TodoList,
  },
  data: () => ({
    icons: ["mdi-home", "mdi-email", "mdi-calendar", "mdi-delete"],
    padless: false,
    variant: "default",
  }),
  computed: {
    localAttrs() {
      const attrs = {};

      if (this.variant === "default") {
        attrs.absolute = false;
        attrs.fixed = false;
      } else {
        attrs[this.variant] = true;
      }
      return attrs;
    },
  },
};
</script>

<style>
body {
  background-color: rgb(66, 66, 66);
  color: aliceblue;
}
* {
  outline: none !important;
}

.theme--light.v-text-field--filled > .v-input__control > .v-input__slot {
  background: #ffffff !important;
}
</style>
