<template>
  <v-list-item>
    <v-list-item-icon
      v-show="!isEditing"
      class="my-0 mr-2"
      style="
        width: 42px;
        flex-flow: column;
        align-items: center;
        align-self: center;
        margin-left: 6px;
      "
    >
      <v-checkbox :input-value="completed" @click="$emit('on-toggle')" />
    </v-list-item-icon>
    <v-list-item-content
      @click="startEditing()"
      v-show="!isEditing"
      style="padding-top: 10px"
    >
      <v-list-item-title
        style="white-space: pre-wrap"
        transition="fade-transition"
        :class="{ completed, 'text--disabled': completed }"
        v-text="todoString"
      ></v-list-item-title>
    </v-list-item-content>
    <v-form
      transition="fade-transition"
      style="margin: 3px 0"
      v-show="isEditing"
      @submit.prevent="endEditing()"
      class="flex-grow-1"
    >
      <v-text-field
        class="ma-0"
        style="padding: 2px 0"
        filled
        @active="startEditing"
        @focusout="endEditing"
        v-model="newTodoString"
        autofocus
        type="text"
        hide-details
      >
        <template v-slot:prepend-inner>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
              color="primary"
                @click="endEditing"
                class="button-primary"
                style="margin-left: -7px"
                icon
                v-on="on"
              >
                <v-icon> mdi-content-save </v-icon>
              </v-btn>
            </template>
            Save
          </v-tooltip>
        </template>
      </v-text-field>
    </v-form>
    <v-list-item-action>
      <v-menu offset-x :nudge-width="200" >
        <template v-slot:activator="{ on, attrs }">
          <v-btn depressed color="gray" v-bind="attrs" v-on="on" fab small text>
            <v-icon>mdi-dots-horizontal</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-subheader>ACTIONS</v-subheader>
          <v-list-item link @click="emitDelete">
            <v-list-item-icon>
              <v-icon>mdi-delete</v-icon>
            </v-list-item-icon>
            <v-list-item-title >
              Delete item
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-list-item-action>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"

    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="primary"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-list-item>
</template>

<script>
export default {
  props: {
    todoString: String,
    completed: Boolean,
  },
  data() {
    return {
      snackbar: false,
      text: 'Your changes were saved successfully.',
      timeout: 2000,
      isEditing: false,
      newTodoString: "",
      offset: true,
    };
  },
  methods: {
    startEditing() {
      this.isEditing = true;
      this.newTodoString = this.todoString;
    },
    endEditing() {
      this.isEditing = false;
      this.snackbar = true
      this.$emit("on-edit", this.newTodoString);
    },
    emitDelete() {
      this.$emit("on-delete");
    },
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
>>> .v-input--checkbox  .v-input__slot{
  width: 24px!important;
  margin-right: 8px;
}


>>> .v-input__prepend-inner{
  margin-right: 11px!important;
  margin-top: 0!important;
  align-self: center!important  ;  
}
/* padding-left: 4px!important; */
</style>