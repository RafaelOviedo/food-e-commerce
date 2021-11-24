<template>
  <div>
    <nav class="navBar" :class="!darkModeBool ? 'navBarDark' : ''">
      <div class="logo" :class="!darkModeBool ? 'darkLogo' : ''">LOGO</div>
      <ul class="itemsBox">
        <router-link :to="{ name: 'HomePage' }" class="listItem" :class="!darkModeBool ? 'listItemDark' : ''">Home</router-link>
        <router-link :to="{ name: 'ProductsPage' }" class="listItem" :class="!darkModeBool ? 'listItemDark' : ''">Products</router-link>
        <router-link :to="{ name: 'AboutPage' }" class="listItem" :class="!darkModeBool ? 'listItemDark' : ''">About</router-link>
        <button class="cartButton" @click="openCartBox">
            <img src="https://img.icons8.com/material-outlined/24/000000/shopping-cart--v1.png" alt="cart" v-show="darkModeBool">
            <img src="https://img.icons8.com/material-outlined/24/ffffff/shopping-cart--v1.png" alt="cart" v-show="!darkModeBool">
            <span class="productQuantity">{{productQuantity}}</span>
        </button>
          <Cart />
        <button class="toggleButton" @click="toDarkMode" v-show="darkModeBool">Dark mode</button>
        <button class="toggleButtonInverse" @click="toDarkModeInverse" v-show="!darkModeBool">Light mode</button>
        <!-- <button @click="logOut">Log out</button> -->
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
import 'boxicons';
import { mapState } from 'vuex';
import Cart from "./Cart.vue"

export default {
  name: "NavBar",
  components: { Cart },
  data() {
    return {
    }
  },
  methods: {
    toDarkMode() {
      this.$store.dispatch("toDarkMode")
    },
    toDarkModeInverse() {
      this.$store.dispatch("toDarkModeInverse")
    },
    openCartBox() {
      this.$store.dispatch("openCartBox")
    }
  },
  computed: {
    ...mapState(["darkModeBool"]),
    ...mapState(["productQuantity"]),
  }
}
</script>

<style scoped>
.navBar {
    position: fixed;
    top: 0;
    left: 5%;
    width: 90%;
    height: 8vh;
    border-bottom: 1px solid #000;
    background: var(--main-color);
    z-index: 2;
}
.navBarDark {
    background: var(--sec-color);
    border-bottom: 1px solid #fff;
}

.logo {
    position: absolute;
    top: 30%;
    left: 20%;
    font-weight: bold;
}
.darkLogo {
    color: #fff;
}

.itemsBox {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 40%;
    height: 100%;
    transform: translate(100%, -22%);
}

.listItem {
    text-decoration: none;
}
.listItemDark {
    color: #fff;
}

.cartButton {
    border: none;
    background: transparent;
    cursor: pointer;
}

.productQuantity {
    position: absolute;
    top: 40%;
    left: 66%;
    width: 15px;
    height: 15px;
    border: 1px solid black;
    border-radius: 50px;
    background: white;
}

.toggleButton {
    width: 20%;
    height: 35%;
    border-radius: 50px;
    background: var(--sec-color);
    color: white;
    cursor: pointer;
    border: none;
}
.toggleButtonInverse {
    width: 20%;
    height: 35%;
    border-radius: 50px;
    background: #fff;
    color: #000;
    cursor: pointer;
    border: none;
}
</style>