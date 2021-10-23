<template>
  <v-card>
    <v-card-title>
      Todo List
      <v-spacer></v-spacer>
      <v-text-field v-model="search" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="todos" :search="search">
      <!-- ここから追加 -->
      <template v-slot:item.action="{ item }">
        <v-icon small @click="deleteItem(item)">delete</v-icon>
      </template>
      <!-- ここまで追加 -->
    </v-data-table>
  </v-card>
</template>

<script>
  import axios from "@/plugins/axios";
  
  export default {
    props: ["todos"],
    data() {
      return {
        search: "",
        headers: [{
            text: "タイトル",
            align: "left",
            value: "title"
          },
          {
            text: "ユーザー名",
            value: "username"
          },
          // ここから追加
          {
            text: "Actions",
            value: "action",
          },
          // ここまで追加
        ]
      };
    },
    computed: {
      user() {
        return this.$store.state.auth.currentUser;
      }
    },
    methods: {
      async deleteItem(item) {
        const res = confirm("本当に削除しますか？");
        if (res) {
          await axios.delete(`/v1/todos/${item.id}`);
          const todos = this.user.todos.filter((todo) => {
            return todo.id !== item.id;
          });
          const newUser = {
            ...this.user,
            todos,
          };
          this.$store.dispatch("auth/setUser", newUser);
        }
      },
    }
  };

</script>

<style>
</style>
