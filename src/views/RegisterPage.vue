<template>
  <div>
    <h1 class="registerTitle">Register</h1>
    <form class="registerBox" @submit.prevent="register">

      <label for="mailInput" class="mailLabel">Mail</label>
      <input id="mailInput" class="mailInput" type="text" placeholder="Type your email..." v-model="email">

      <label for="passwordInput" class="passwordLabel">Password</label>
      <input id="passwordInput" class="passwordInput" type="password" placeholder="Type your password..." v-model="password">

        <button class="registerButton" type="submit">Register</button>

    </form>
    <p class="registerLink">Don't have an account yet? <router-link :to="{ name: 'LogInPage' }" class="listItem">Login here</router-link></p>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "firebase/auth";

export default {
  name: "RegisterPage",
    data() {
      return {
        email: "",
        password: "",
        auth: getAuth(),
      }
    },
    methods: {
      register() {
        createUserWithEmailAndPassword(this.auth, this.email, this.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("USER CREDENTIAL", userCredential)
            console.log("USER", user)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("ERRORS", errorCode, errorMessage)
          });
      }
    }
}
</script>

<style scoped>
.registerTitle {
  position: absolute;
  top: 10%;
  left: 45.5%;
}

.registerBox {
  width: 25%;
  height: 60%;
  border: 1px solid #000000;
  border-radius: 15px;
  position: absolute;
  top: 20%;
  left: 36%;
}

.mailLabel {
  position: relative;
  top: 10%;
  left: 49%;
  width: 50%;
  height: 8%;
}
.mailInput {
  position: relative;
  top: 20%;
  left: 20%;
  width: 50%;
  height: 8%;
  border: 1px solid #000000;
  border-radius: 10px;
}

.passwordLabel {
  position: relative;
  top: 40%;
  left: -15%;
  width: 50%;
  height: 8%;
}
.passwordInput {
  position: relative;
  top: 40%;
  left: 26%;
  width: 50%;
  height: 8%;
  border: 1px solid #000000;
  border-radius: 10px;
}

.registerButton {
  position: relative;
  top: 60%;
  left: -20%;
  width: 40%;
  height: 7%;
}

.registerLink {
  position: absolute;
  top: 80%;
  left: 40%;
  width: 40%;
  height: 7%;
}
</style>