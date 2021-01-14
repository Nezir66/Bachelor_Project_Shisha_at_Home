<template>
  <navbar>
    <div class="container-fluid">
      <div class="row wholeBody">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <!--Shisha Flavors-->
          <div id="container-whole" class="browsing-history">
            <h2 tabindex="0">Tabak Sorten</h2>
            <hr />
            <carousel-3d
              style="height: 250px"
              :controls-visible="true"
              :clickable="true"
            >
              <slide
                class="sliderFlavor"
                style="color: white"
                v-for="(flavor, index) in flavors"
                :key="flavor._id"
                :index="index"
              >
                <span tabindex="0">
                  <h3 class="focus">{{ flavor.flavor }}</h3>
                  <p>{{ flavor.description }}</p>
                  <p>{{ flavor.price }} €</p>
                </span>
                <a
                  @click="addProductToCart(flavor)"
                  class="btn btn-danger"
                  tabindex="0"
                  @keyup.enter="addProductToCart(flavor)"
                  >In den Einkaufswagen</a
                >
              </slide>
            </carousel-3d>
            <hr />
            <h2 tabindex="0">Shisha und Kohle</h2>
            <carousel-3d :controls-visible="true" :clickable="true">
              <slide class="sliderFlavor" :key="hookah._id" :index="0">
                <h3 tabindex="0" class="focus">{{ hookah.hookah }}</h3>
                <img
                  src="/images/Shisha-icon.png"
                  alt="Shisha Icon"
                  style="margin-top: -30px"
                />
                <p tabindex="0">{{ hookah.price }} €</p>
                <a
                  @click="addProductToCart(hookah)"
                  @keyup.enter="addProductToCart(hookah)"
                  class="btn btn-danger"
                  tabindex="0"
                  >+ 1 In den Einkaufswagen</a
                >
              </slide>

              <slide
                class="sliderFlavor"
                :key="coal._id"
                :index="1"
                style="padding-top: 10%"
              >
                <h3 style="margin-top: -5%" tabindex="0" class="focus">Kohle</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  alt="Shisha Kohle Icon"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 172 172"
                  style="fill: #000000"
                >
                  <g transform="translate(-10.32,-10.32) scale(1.12,1.12)">
                    <g
                      fill="none"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                      style="mix-blend-mode: normal"
                    >
                      <path d="M0,172v-172h172v172z" fill="none"></path>
                      <g>
                        <path
                          d="M53.75,150.5l-32.25,-17.91667v-39.41667l32.25,17.91667zM118.25,150.5l-32.25,-17.91667v-39.41667l32.25,17.91667zM86,93.16667l-32.25,-17.91667v-39.41667l32.25,17.91667z"
                          fill="#000000"
                        ></path>
                        <g fill="#333333">
                          <path
                            d="M53.75,150.5l32.25,-17.91667v-39.41667l-32.25,17.91667zM118.25,150.5l32.25,-17.91667v-39.41667l-32.25,17.91667zM86,93.16667l32.25,-17.91667v-39.41667l-32.25,17.91667z"
                          ></path>
                        </g>
                        <g fill="#333333">
                          <path
                            d="M21.5,93.16667l32.25,-17.91667l32.25,17.91667l-32.25,17.91667zM86,93.16667l32.25,-17.91667l32.25,17.91667l-32.25,17.91667zM53.75,35.83333l32.25,-17.91667l32.25,17.91667l-32.25,17.91667z"
                          ></path>
                        </g>
                      </g>
                      <path d="" fill="none"></path>
                      <path d="" fill="none"></path>
                      <path d="" fill="none"></path>
                    </g>
                  </g>
                </svg>
                <p tabindex="0">{{ coal.price }} €</p>
                <a
                  @click="addProductToCart(coal)"
                  @keyup.enter="addProductToCart(coal)"
                  tabindex="0"
                  class="btn btn-danger"
                  >+ 3 In den Einkaufswagen</a
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
  data() {
    return {
      hookah: {
        _id: 1,
        hookah: "Unity Shisha",
        price: 13,
        quantity: 1,
      },
      coal: {
        _id: 2,
        coal: "3 x Kohle",
        price: 2,
        quantity: 1,
      },
    };
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
  text-align: center;
}

.wholeBody {
  padding: 0;
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

.carousel-3d-container {
  height: 200px;
}

.icon {
  margin-right: 0;
}
.carousel-3d-slide img {
  width: 25%;
  height: 56%;
}
.container-fluid {
  padding: 0;
}
</style>

<!--
Webseite um farben zu mischen:
https://colorschemedesigner.com/csd-3.5/
-->