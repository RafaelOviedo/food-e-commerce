<template>
    <div>
        <nav class="navBar">
            <div class="logo">LOGO</div>
            <ul class="itemsBox">
                <router-link :to="{ name: 'HomePage' }" class="listItem">Home</router-link>
                <router-link :to="{ name: 'ProductsPage' }" class="listItem">Products</router-link>
                <router-link :to="{ name: 'AboutPage' }" class="listItem">About</router-link>
                <button class="cartButton">
                    <box-icon id="cart-btn" onclick="openLateralBar()">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABl0lEQVRIS+2V8TFDQRCHv1SAClABKkAFpAJUgApQASpABaQDKqADdEAH5svcZY53ee/uIfmDnckkk9m7b3+7e7sD5mSDOXH5B88s82mqT4GTXyS/AdvAk4xZguUdAxdfwVuAH83vzfD7EjDavpbetZFTnF68C9yGPw6A675U4A7YAV6BlXhP23N6AZaB+1CbvmyztQDcAPslYGtxGBxXAQOptTRzw6B+fEeb4nXgMZAmTVFJToNfSnula3LZ+mtBraprLZbrIWncTsU6HAHngWZ9atK9mKS2kbEuxXbhc63MjH+jR7rA3hGfQ1++c8DMfbISsCm+CqfOwvMqDcLSZMtTArZWHm68xVJ6zq8E7Dkn1164wLSNB32BvU/zLQXbZMJUXWONZxQPl4L1d6DYaI7RUvsRcIQZgHUvMed0tiw1iiPI+WvKR5l1aUncRCpt7YNacDrJBBtEanET+d9k936nq+PZdJjYsWnK06Wif+tiqVWcrrncRIpLxaAMZOpsrwWrRJVxqOSyKLDznfcBl3Rzp8/fA38AfQ1IH6ifylIAAAAASUVORK5CYII="/>
                    </box-icon>
                </button>
                <button class="toggleButton">Dark mode</button>
            </ul>
        </nav>
        <router-view />
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
    left: 5%;
    width: 90%;
    height: 8vh;
    border-bottom: 1px solid black;
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
    transform: translate(100%, -22%);
}

.listItem {
    text-decoration: none;
}

.cartButton {
    border: none;
    background: transparent;
    cursor: pointer;
}

.toggleButton {
    width: 20%;
    border-radius: 50px;
    background: black;
    color: white;
    cursor: pointer;
}
</style>