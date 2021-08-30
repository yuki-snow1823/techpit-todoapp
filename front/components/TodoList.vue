<template>
  <v-card>
    <v-card-title>
      Todo List
      <v-spacer></v-spacer>
      <v-text-field v-model="search" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="todos" :search="search"></v-data-table>
  </v-card>
</template>

<script>
export default {
  props: ["todos"],
  data() {
    return {
      search: "",
      headers: [
        {
          text: "タイトル",
          align: "left",
          value: "title"
        },
        { 
          text: "ユーザー名", 
          value: "username" 
        }
      ]
    };
  }
};
</script>

<style>
</style>