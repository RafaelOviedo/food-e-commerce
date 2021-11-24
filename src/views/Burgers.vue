<template>
  <div :class="darkModeBool ? 'burgersComponent' : 'burgersComponentDark' ">
    <p class="loadingText" :class="!darkModeBool ? 'loadingTextDark' : ''" v-if="loading">Loading...</p>
    <ul class="cardsContainer" v-else>
      <li v-for="(burger, index) in allBurgers" :key="index">
        <div class="foodCard" :class="!darkModeBool ? 'foodCardDark' : ''">
          <div class="box1">
            <p class="cardTitle" :class="!darkModeBool ? 'cardTitleDark' : ''">Title: {{burger.title}}</p>
            <p class="cardPrice">Price: {{burger.price}}</p>
            <p class="cardType">Type: {{burger.type}}</p>
            <router-link class="cardMoreInfo" :to="{ name: 'BurgersDetails', params: { id: burger.id }, }">More info</router-link>
            <button class="addToCartButton" @click="addToCart">Add to cart</button>
          </div>
          <img class="cardImage" :src="`${burger.image}`" alt="burgerphoto">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "../store/index"
import { mapState } from 'vuex';

export default {
  name: "Burgers",
  data() {
    return {
      loading: false,
    }
  },
  async mounted() {
    this.loading = true;
    await store.dispatch("getAllBurgers");
    this.loading = false;
  },
  computed: {
    ...mapState(["allBurgers"]),
    ...mapState(["darkModeBool"]),
  },
  methods: {
    addToCart() {
      store.dispatch("addToCart");
    }
  }
}
</script>

<style scoped>
.burgersComponent {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--main-color);
}
.burgersComponentDark {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--sec-color);
}
.cardsContainer {
  position: fixed;
  top: 10vh;
  left: -39px;
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  list-style-type: none;
}
.cardsContainer::-webkit-scrollbar {
  display: none;
}

.box1 {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  height: 100%;
}

.foodCard {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  height: 40vh;
  border: 1px solid #000;
  margin-bottom: 30px;
}
.foodCardDark {
  width: 90vw;
  height: 40vh;
  border: 1px solid #fff;
  margin-bottom: 30px;
  color: #fff;
}

.cardImage {
  border-radius: 5px;
  width: 30%;
  height: 90%;
  margin-right: 10%;
}
.cardTitle {
  font-size: 20px;
}
.cardTitleDark {
  font-size: 20px;
  color: #fff;
}
.cardPrice {
  font-size: 20px;
}

.cardType {
  font-size: 20px;
}

.loadingText {
  position: absolute;
  top: 30vh;
  left: 45%;
  font-size: 20px;
}
.loadingTextDark {
  color: #fff;
}
.cardMoreInfo {
  font-size: 20px;
  color: #DC0000;
}
.addToCartButton {
  background: var(--sec-color);
  color: #fff;
  width: 30%;
  height: 10%;
  border: none;
  cursor: pointer;
}
.addToCartButton:active {
  background: #fff;
  color: var(--sec-color);
}
</style>