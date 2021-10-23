<template>
  <div>
    <div v-if="user">
      <p>Email: {{ user.email }}</p>
      <p>名前: {{ user.name }}</p>
    </div>
    <v-btn @click="logOut">LOGOUT</v-btn>
  </div>
</template>

<script>
  import firebase from "@/plugins/firebase";
  export default {
    computed: {
      user() {
        return this.$store.state.auth.currentUser;
      },
    },
    methods: {
      async logOut() {
        await firebase
          .auth()
          .signOut()
          .catch((error) => {
            console.log(error);
          });

        this.$store.dispatch("auth/setUser", null);
        this.$router.push("/login");
      },
    },
    fetch({
      store,
      redirect
    }) {
      store.watch(
        state => state.auth.currentUser,
        (newUser, oldUser) => {
          if (!newUser) {
            return redirect("/login");
          }
        }
      );
    },
  };

</script>

<style>
</style>
