<template>
<navbar>
  <div class="container-fluid">
    <div class="row wholeBody">
      <div class="col-xl-2"></div>
      <div class="col-xl-8 col-lg-8 col-md-8 col-sm-10 col-xs-10">
        <!--Drinks-->

        <div id="container-whole" class="container-fluid browsing-history">
          <h1>Getränke & Cocktails</h1>
          <hr />
          <carousel-3d :controls-visible="true" :clickable="false">
              <slide
                class="sliderDrink"
                v-for="(drink, index) in drinks"
                :key="drink._id"
                :index="index"
              >
                <h3>{{ drink.drink }}</h3>
                <p>{{ drink.description }}</p>
                <h2>{{ drink.price }} €</h2>
                <a @click="addProductToCart(drink)" class="btn btn-danger"
                  >In den Einkaufswagen</a
                >
              </slide>
            </carousel-3d>
          <hr />
          <p
            style="margin-top: 30px; width:50%,color:white; cursor:pointer;"
            @click="$store.commit('deleteProduct', drink)"
          >
            Delete
          </p>
          <router-link to="/Admin/addNewProducts">Go Admin</router-link>
          <button @click="$store.commit('clearCart')">delete Cart</button>
        </div>
      </div>
      <div class="col-xl-2"></div>
    </div>
  </div>
  </navbar>
</template>

<script>
import { mapActions } from "vuex";
import Navbar from "~/components/mainNavbar.vue";
export default {
  async asyncData({ $axios }) {
    try {
      let responseDrink = await $axios.$get(
        "http://localhost:3000/Shisha@home/drink"
      );

      return {
        drinks: responseDrink.drinks,
      };
    } catch (err) {
      console.log(err);
    }
  },
  components: {
    navbar: Navbar,
  },
  methods: {
    ...mapActions(["addProductToCart"]),
  },
};
</script>

<style scoped>
.sliderDrink {
  background-color: #82260e;
  padding: 5%;
}
.wholeBody {
  padding: 0;
}
#container-whole {
  text-align: center;
  color: white;
  padding: 50px;
}
.btn {
  background-color: white;
  color: #82260e !important;
  border: none;
}
.btn:hover {
  color: white !important;
  background-color: #295406;
}
</style>
</style>

<!--
Webseite um farben zu mischen:
https://colorschemedesigner.com/csd-3.5/
-->