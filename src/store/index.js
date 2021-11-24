import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state: {
        allBurgers: [],
        allPizzas: [],
        darkModeBool: true,
        cartBox: false,
        productQuantity: 0,
        cart: [],
    },
    mutations: {
        getAllBurgers(state, payload) {
            state.allBurgers = payload;
        },
        // getAllPizzas(state, payload) {
        //     state.allPizzas = payload;
        // },
        toDarkMode(state) {
            state.darkModeBool = false;
        },
        toDarkModeInverse(state) {
            state.darkModeBool = true;
        },
        openCartBox(state) {
            state.cartBox = true;
        },
        closeCartBox(state) {
            state.cartBox = false;
        },
        addToCart(state) {
            state.productQuantity++;
        }
    },
    actions: {
        async getAllBurgers({ commit }) {
            const response = await axios.get("https://e-commerce-server-rafaeloviedo.vercel.app/api/burgers");
            console.log("ALL BURGERS FROM ACTION", response.data)
            commit("getAllBurgers", response.data);
        },
        // async getAllPizzas({ commit }) {
        //     const response = await axios.get("https://e-commerce-server-rafaeloviedo.vercel.app/api/meals");
        //     console.log("ALL PIZZAS FROM ACTION", response.data)
        //     commit("getAllBurgers", response.data);
        // },
        toDarkMode({commit}) {
            commit("toDarkMode")
        },
        toDarkModeInverse({commit}) {
            commit("toDarkModeInverse")
        },
        openCartBox({commit}) {
            commit("openCartBox")
        },
        closeCartBox({commit}) {
            console.log("ENTER IN ACTION")
            commit("closeCartBox")
        },
        addToCart({commit}) {
            commit("addToCart")
        }
    },
    getters: {},
    modules: {}
});

export default store;