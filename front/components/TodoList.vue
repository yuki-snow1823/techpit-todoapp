<template>
  <v-card>
    <v-card-title>
      Todo List
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="todos" :search="search"></v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        {
          title: "test2",
          username: "太郎"
        },
        {
          title: "test1",
          username: "太郎"
        },
        {
          title: "test3",
          username: "太郎"
        }
      ],
      search: "",
      headers: [
        {
          text: "タイトル",
          align: "left",
          value: "title"
        },
        { text: "ユーザー名", value: "username" }
      ]
    };
  }
};
</script>

<style>
</style>