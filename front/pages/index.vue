<template>
  <div>
    <AddTodo @submit="addTodo" />
    <TodoList :todos="todos" />
  </div>
</template>

<script>
  import AddTodo from "@/components/AddTodo";
  import TodoList from "@/components/TodoList";
  import axios from "@/plugins/axios";


  export default {
    components: {
      AddTodo,
      TodoList,
    },
    data() {
      return {
        todos: [],
      };
    },
    // ここから追加
    created() {
      console.log("API_KEY:", process.env.API_KEY);
    },
    // ここまで追加
    methods: {
      async addTodo(title) {
        await axios.post("/v1/todos", { title })
        this.todos.push({
          title
        });
      },
    },
  };

</script>

<style>
</style>
