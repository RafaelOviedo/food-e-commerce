<template>
  <div class="homeText">
    <ul>
      <li v-for="(meal, index) in allMeals" :key="index">
        <p>{{meal.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import store from "../store/index"

export default {
    name: "HomePage",

    mounted() {
        store.dispatch("getAllMeals");
    }, 
    computed: {
      ...mapState(["allMeals"]),
    }
}
</script>

<style scoped>
.homeText {
  position: absolute;
  top: 20%;
  left: 30%;
}
</style>