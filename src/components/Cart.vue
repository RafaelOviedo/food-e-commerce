<template>
  <div class="cartContainer" v-if="cartBox" :key="componentKey">
    <button class="closeCartBoxButton" @click.capture="closeCartBox">&times;</button>
  </div>
</template>

<script>

export default {
  name: "Cart",
  data() {
    return {
      componentKey: 0,
    }
  },
  methods: {
    closeCartBox() {
      console.log("CLICKED");
      this.$store.dispatch("closeCartBox");
      this.componentKey += 1;
    }
  },
  computed: {
    cartBox() {
      return this.$store.state.cartBox;
    }
  }
}
</script>

<style scoped>
.cartContainer {
  position: absolute;
  top: 7vh;
  left: 30%;
  width: 70%;
  height: 65vh;
  background: #fff;
  border: 1px solid #000;
  border-radius: 5px;
}

.closeCartBoxButton {
  position: absolute;
  top: 2%;
  left: 2%;
  width: 10%;
  height: 5%;
  background: var(--sec-color);
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
.closeCartBoxButton:active {
  background: #fff;
  color: var(--sec-color);
}
</style>