<template>
    <div>
        <nav class="navBar">
            <div class="logo">LOGO</div>
            <ul class="itemsBox">
                <router-link>Home</router-link>
                <router-link>Cart</router-link>
                <router-link>Products</router-link>
                <router-link>About</router-link>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style scoped>
.navBar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 10vh;
    border: 1px solid black;
}

.logo {
    position: absolute;
    top: 30%;
    left: 20%;
    font-weight: bold;
}

.itemsBox {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 40%;
    height: 100%;
    background: pink;
    transform: translate(100%, -22%);
}
</style>