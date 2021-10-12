<template>
  <div>
    <h1 class="loginTitle">Log In</h1>
    <form class="loginBox">

      <label for="mailInput" class="mailLabel">Mail</label>
      <input id="mailInput" class="mailInput" type="text" placeholder="Type your email..." v-model="email">

      <label for="passwordInput" class="passwordLabel">Password</label>
      <input id="passwordInput" class="passwordInput" type="password" placeholder="Type your password..." v-model="password">

        <button class="loginButton" @submit.prevent="login">LogIn</button>

    </form>
    <p class="registerLink">Don't have an account yet? <router-link :to="{ name: 'RegisterPage' }" class="listItem">Register here</router-link></p>
  </div>
</template>

<script>
import firebase from "firebase/compat/app"

export default {
  name: "LogInPage",
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    login() {
      firebase.auth()
      .signInWithEmailAndPassword(this.email.value, this.password.value)
      .then(data => console.log(data))
      .catch(error => alert(error.message));
    }
  }
}
</script>

<style scoped>
.loginTitle {
  position: absolute;
  top: 10%;
  left: 46.5%;
}

.loginBox {
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

.loginButton {
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