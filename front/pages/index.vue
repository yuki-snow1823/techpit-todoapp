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
    methods: {
      async addTodo(title) { // asyncを追加
        await axios.post("/v1/todos", { todo }); // この行を追加
        this.todos.push({
          title
        });
      },
    },
  };

</script>

<style>
</style>
