import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state: {
        allMeals: [],
    },
    mutations: {
        getAllMeals(state, payload) {
            state.allMeals = payload;
        }
    },
    actions: {
        async getAllMeals({ commit }) {
            const response = await axios.get("./burgersAPI.json");
            console.log("ALL MEALS FROM ACTION", response.data)
            commit("getAllMeals", response.data);
        }
    },
    getters: {},
    modules: {}
});

export default store;