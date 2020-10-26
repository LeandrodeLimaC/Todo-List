<template>
  <v-app>
    <v-container fluid class="pa-0" style="
    height: 100vh;
    display: flex;
    flex-flow: column;
">
      <v-row align="center" justify="center">
        <v-col sm="12" md="6" lg="5">
          <todo-list />
        </v-col>
      </v-row>
      <v-footer dark class="pa-0" v-bind="localAttrs" :padless="padless">
        <v-card flat tile width="100%" class="black text-center">
          <v-card-text>
            <v-btn color="primary" class="mx-4" href="https://github.com/LeandrodeLimaC/Todo-List" icon>
              <v-icon size="24px">
                mdi-github-circle
              </v-icon>
            </v-btn>
            <v-btn color="primary" class="mx-4" href="mailto:leandrolima7472@gmail.com" icon>
              <v-icon size="24px">
                mdi-email
              </v-icon>
            </v-btn>
            <v-btn color="primary" class="mx-4" href="https://www.linkedin.com/in/leandrocuminato/" icon>
              <v-icon size="24px">
                mdi-linkedin-box
              </v-icon>
            </v-btn>
          </v-card-text>
          <v-card-text style="display:flex;justify-content:center" class="white--text py-0">
            <p style="max-width: 800px">This project was inspired by a checklist that i saw on twitter released by <a href="https://twitter.com/steveschoger"><b>Steve Schoger</b></a>.<br> My objective is entirely to help anyone who wants to give the original list a try and wants to keep mark what's already done :)<br>Click <a href="https://twitter.com/steveschoger/status/1284178659927044098/photo/1"><b>here</b></a> to check the original post</p>
          </v-card-text>
          <v-divider></v-divider>

          <v-card-text class="white--text">
            <strong>Made with <v-icon color="blue">mdi-heart</v-icon> by LeandroLimaC</strong>
          </v-card-text>
        </v-card>
      </v-footer>
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
