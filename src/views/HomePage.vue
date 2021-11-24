<template>
  <div>
    <div :class="darkModeBool ? 'homeComponent' : 'homeComponentDark'">
      <h2 class="categoriesLabel" :class="!darkModeBool ? 'darkLabel' : ''">CATEGORIES</h2>
      <div class="categoriesContainer">
        <router-link id="categorieCard1" class="categorieCard" :to="{ name: 'Burgers' }">BURGERS</router-link>
        <router-link id="categorieCard2" class="categorieCard" :to="{ name: 'Pizzas' }">PIZZAS</router-link>
        <router-link id="categorieCard3" class="categorieCard" :to="{ name: 'Sushi' }">SUSHI</router-link>
        <router-link id="categorieCard4" class="categorieCard" :to="{ name: 'Arabic' }">ARABIC</router-link>
      </div>

      <div class="divider"></div>

      <h2 class="suggestionsLabel" :class="!darkModeBool ? 'darkLabel' : ''">RESTAURANTS</h2>
      <div class="suggestionsContainer">
        <div id="suggestionCard1" class="suggestionCard">Rest 1</div>
        <div id="suggestionCard2" class="suggestionCard">Rest 2</div>
        <div id="suggestionCard3" class="suggestionCard">Rest 3</div>
        <div id="suggestionCard4" class="suggestionCard">Rest 4</div>
      </div>
      <div class="divider" :class="!darkModeBool ? 'dividerDark' : ''"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "HomePage",

  computed: {
    ...mapState(["darkModeBool"]),
  }
}
</script>

<style>
@import url(../common/import.css);
</style>

<style scoped>
.homeComponent {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--main-color);
}
.homeComponentDark {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--sec-color);
}

.darkLabel {
  color: #fff;
}

.categoriesLabel {
  position: absolute;
  top: 10vh;
  left: 44%;
}
.categoriesContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 18vh;
  left: 14%;
  width: 70vw;
  height: 25vh;
}
.categorieCard {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 80%;
  border-radius: 5px;
  color: #000;
  font-weight: bold;
  font-size: 25px;
  cursor: pointer;
}
#categorieCard1 {
  background: url("https://cdn.pixabay.com/photo/2017/05/22/07/11/burger-2333280_960_720.jpg");
  background-size: cover;
  filter: contrast(130%);
}
#categorieCard2 {
  background: url("https://cdn.pixabay.com/photo/2017/01/22/19/12/pizza-2000600_960_720.jpg");
  background-size: cover;
  filter: contrast(130%);
}
#categorieCard3 {
  background: url("https://cdn.pixabay.com/photo/2015/01/14/23/13/sushi-599721_960_720.jpg");
  background-size: cover;
  filter: contrast(130%);
}
#categorieCard4 {
  background: url("https://1.bp.blogspot.com/-arD9RHiExIs/XX_9rVwremI/AAAAAAAARhM/ABbf98jbcFk6RIxJLZVQdIlhMHlsE4O2ACLcBGAsYHQ/s640/sfiha.jpg");
  background-size: cover;
  filter: contrast(130%);
}
.divider {
  position: absolute;
  top: 45vh;
  left: 5%;
  width: 90%;
  height: 1px;
  background: #000;
}
.dividerDark {
  background: #fff;
}

.suggestionsLabel {
  position: absolute;
  top: 50vh;
  left: 44%;
}
.suggestionsContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 60vh;
  left: 14%;
  width: 70vw;
  height: 25vh;
}
.suggestionCard {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 80%;
  border-radius: 5px;
  color: #000;
  font-weight: bold;
  font-size: 25px;
  cursor: pointer;
}
#suggestionCard1 {
  /* background: url("https://cdn.pixabay.com/photo/2017/05/22/07/11/burger-2333280_960_720.jpg"); */
  border: 1px solid black;
  background-size: cover;
  filter: contrast(130%);
}
#suggestionCard2 {
  /* background: url("https://cdn.pixabay.com/photo/2017/01/22/19/12/pizza-2000600_960_720.jpg"); */
  border: 1px solid black;
  background-size: cover;
  filter: contrast(130%);
}
#suggestionCard3 {
  /* background: url("https://cdn.pixabay.com/photo/2015/01/14/23/13/sushi-599721_960_720.jpg"); */
  border: 1px solid black;
  background-size: cover;
  filter: contrast(130%);
}
#suggestionCard4 {
  /* background: url("https://1.bp.blogspot.com/-arD9RHiExIs/XX_9rVwremI/AAAAAAAARhM/ABbf98jbcFk6RIxJLZVQdIlhMHlsE4O2ACLcBGAsYHQ/s640/sfiha.jpg"); */
  border: 1px solid black;
  background-size: cover;
  filter: contrast(130%);
}
</style>