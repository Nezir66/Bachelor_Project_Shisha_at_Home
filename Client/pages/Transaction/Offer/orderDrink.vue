<template>
  <navbar>
    <div class="container-fluid">
      <div class="row wholeBody">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <!--Drinks-->
          <div id="container-whole" class="browsing-history">
            <h2 tabindex="0">Getränke</h2>
            <hr />
            <carousel-3d :controls-visible="true" :clickable="false">
              <slide
                class="sliderDrink"
                v-for="(drink, index) in drinks"
                :key="drink._id"
                :index="index"
              >
                <span tabindex="0">
                  <h3>{{ drink.drink }}</h3>
                  <p>{{ drink.description }}</p>
                  <p>{{ drink.price }} €</p>
                </span>
                <a
                  tabindex="0"
                  @click="addProductToCart(drink)"
                  @keyup.enter="addProductToCart(drink)"
                  class="btn btn-danger"
                  >In den Einkaufswagen</a
                >
              </slide>
            </carousel-3d>
          </div>
        </div>
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
.sliderDrink:focus {
  border: 2px solid black;
}

.wholeBody {
  padding: 0;
}
.btn {
  border: none;
}
</style>

<!--
Webseite um farben zu mischen:
https://colorschemedesigner.com/csd-3.5/
-->