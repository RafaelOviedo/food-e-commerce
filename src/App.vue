<template>
  <NavBar/>
</template>

<script>
import NavBar from "./components/NavBar.vue"
import { useRouter, useRoute } from "vue-router";
import { onBeforeMount } from "vue";
import firebaseApp from "./main"
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default {
  name: 'App',
  components: {
    NavBar,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const auth = getAuth(firebaseApp);

    onBeforeMount(() => {
      onAuthStateChanged(auth, user => { 
        console.log("ENTRA")
        if(!user) {
          router.replace("/login");
        } else if(route.path === "/login" || route.path === "/register") {
          router.replace("/home");
        } 
      });
    });
    
    return {
      router,
      route,
      auth
    }
  }
}
</script>

<style scoped>
* {
  font-family: Arial, Helvetica, sans-serifs;
}
</style>
