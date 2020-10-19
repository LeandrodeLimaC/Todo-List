<template>
  <v-card class="mx-auto" tile>
    <v-col class="mx-auto">
      <v-subheader>Design Hand-off Checklist</v-subheader>
      <new-todo @on-addTodo="addTodo($event)" />
      <v-divider />
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <todo
              v-for="(todo, index) in todos"
              :key="index"
              :todoString="todo.todoString"
              :completed="todo.completed"
              @on-delete="deleteTodo(todo)"
              @on-toggle="toggleTodo(todo)"
              @on-edit="editTodo(todo, $event)"
            />
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-col>
  </v-card>
</template>

<script>
import Todo from "./Todo";
import NewTodo from "./NewTodo";

export default {
  components: {
    Todo,
    NewTodo,
  },
  data() {
    return {
      todos: [
        { todoString: "Hover states", completed: false },
        { todoString: "Focus states", completed: false },
        { todoString: "Mobile breakpoint (320px)", completed: false },
        { todoString: "Sm breakpoint (640px)", completed: false },
        { todoString: "Md breakpoint (768px)", completed: false },
        { todoString: "Lg breakpoint (1024px)", completed: false },
        { todoString: "Xl breakpoint (1280px)", completed: false },
        { todoString: "Consistent font-sizes", completed: false },
        { todoString: "Consistent spacing", completed: false },
        { todoString: "Transitions/Animations", completed: false },
        { todoString: "Unsplash image links", completed: false },
        { todoString: "Export new icons", completed: false },
        {
          todoString:
            "Mock-up with really long text (Does text wrap/truncate/etc.)",
          completed: false,
        },
        {
          todoString: "Show interactivity (Dropdowns/mobile navigation/etc)",
          completed: false,
        },
        { todoString: "Blank states", completed: false },
        {
          todoString: "Show end of lists (pagination/continuous scrolling)",
          completed: false,
        },
        {
          todoString: "Show end of page (footer/padding/etc)",
          completed: false,
        },
        {
          todoString: "Scrolling behavior (static/fixed elements/etc)",
          completed: false,
        },
        { todoString: "Unsplash image links", completed: false },
        { todoString: "Error states", completed: false },
        { todoString: "Empty states", completed: false },
      ],
    };
  },
  methods: {
    addTodo(newTodo) {
      this.todos.unshift({
        todoString: newTodo,
        completed: false,
      });
    },
    toggleTodo(todo) {
      todo.completed = !todo.completed;
    },
    editTodo(todo, newTodoString) {
      todo.todoString = newTodoString;
    },
    deleteTodo(deleteTodo) {
      this.todos = this.todos.filter((todo) => todo !== deleteTodo);
    },
  },
};
</script>

<style>
</style>