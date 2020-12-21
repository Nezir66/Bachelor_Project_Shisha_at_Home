<template>
  <navbar>
    <div class="container-fluid">
      <div class="row wholeBody">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <!--Shisha Flavors-->
          <div id="container-whole" class="container-fluid browsing-history">
            <h1>Tabak Sorten</h1>
            <hr />
            <carousel-3d :controls-visible="true" :clickable="false">
              <slide
                class="sliderFlavor"
                v-for="(flavor, index) in flavors"
                :key="flavor._id"
                :index="index"
                style=""
              >
                <h3>{{ flavor.flavor }}</h3>
                <p>{{ flavor.description }}</p>
                <h2>{{ flavor.price }} €</h2>
                <a @click="addProductToCart(flavor)" class="btn btn-danger"
                  >In den Einkaufswagen</a
                >
              </slide>
            </carousel-3d>
            <hr />
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
      let responseFlavor = await $axios.$get(
        "http://localhost:3000/Shisha@home/flavor"
      );

      return {
        flavors: responseFlavor.flavors,
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
.sliderFlavor {
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

<!--
Webseite um farben zu mischen:
https://colorschemedesigner.com/csd-3.5/
-->