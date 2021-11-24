<template>
<!-- <nav-bar v-if="sdf"></nav-bar> -->
  <NavBar/>
</template>

<script>
import NavBar from "./components/NavBar.vue"
// import { useRouter, useRoute } from "vue-router";
// import { onBeforeMount } from "vue";
// import firebaseApp from "./main"
// import { getAuth, onAuthStateChanged } from "firebase/auth";
export default {
  name: 'App',
  components: {
    NavBar,
  },
  // data() {
  //   return {
  //     router: useRouter(),
  //     route: useRoute(),
  //     auth: getAuth(firebaseApp),
  //   }
  // },
  // mounted() {
  //   onAuthStateChanged(this.auth, user => { 
  //       console.log("ENTRA")
  //       if(!user && this.route !== "/login") {
  //         this.router.replace("/login");
  //       } else if(this.route.path === "/login" || this.route.path === "/register") {
  //         this.router.replace("/home");
  //       } 
  //   })
  // }
  // setup() {
  //   const router = useRouter();
  //   const route = useRoute();
  //   const auth = getAuth(firebaseApp);
  //   // const user = auth.currentUser;

  //   onBeforeMount(() => {
  //     onAuthStateChanged(auth, (user) => { 
  //       console.log("ENTRA", user)
  //       if(!user && route.path !== "/login") {
  //         router.replace("/login");
  //       } else if(user) {
  //         router.replace("/home");
  //       } 
  //     });
  //   });
  // }
}
</script>

<style scoped>
* {
  font-family: Arial, Helvetica, sans-serifs;
}
</style>
