import firebase from "@/plugins/firebase";
import axios from "@/plugins/axios";

const authCheck = ({ store, redirect }) => {
  firebase.auth().onAuthStateChanged(async user => {
    if (user) {
      const { data } = await axios.get('/v1/users', {
        params: {
          uid: user.uid,
        },
      });
      console.log("ログインしているユーザー:", data);
      store.dispatch("auth/setUser", data)
    } else {
      store.dispatch("auth/setUser", null)
    }
  });
};

export default authCheck;