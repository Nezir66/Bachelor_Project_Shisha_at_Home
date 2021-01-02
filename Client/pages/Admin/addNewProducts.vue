<template>
  <navbar>
    <div class="container-fluid">
      <div class="row addProductAdmin">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div v-if="$auth.$state.user.name == 'Admin'">
            <!--Shisha Flavors-->
            <div id="container-whole" class="container-fluid browsing-history">
              <div class="row">
                <div
                  class="col-xl-2 col-lg-2 col-md-4 col-sm-5 col-5 br bb bodyOfProd"
                  v-for="(flavor, index) in flavors"
                  :key="flavor._id"
                >
                  <div class="history-box">
                    <div class="a-spacing-top-base asin-title">
                      <span class="a-text-normal">
                        <div class="p13n-sc-truncated">{{ flavor.flavor }}</div>
                      </span>
                    </div>

                    <div class="a-spacing-top-base asin-title">
                      <span class="a-text-normal">
                        <div class="p13n-sc-truncated">
                          {{ flavor.description }}
                        </div>
                      </span>
                    </div>

                    <div class="a-row">
                      <span class="a-size-base a-color-price">
                        <span class="p13n-sc-price">{{ flavor.price }}$</span>
                      </span>
                    </div>

                    <div class="a-row">
                      <nuxt-link
                        :to="`/Admin/Flavors/${flavor._id}`"
                        class="btn margin-right-10"
                        >Update</nuxt-link
                      >
                      <a
                        @click="deleteFlavor(flavor._id, index)"
                        class="btn margin-right-10"
                        >Delete</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <nuxt-link to="/Admin/Flavors"
                ><button class="btn btn-primary">
                  + Add new Flavor
                </button></nuxt-link
              >
            </div>

            <!--Drinks-->
            <div id="container-whole" class="container-fluid browsing-history">
              <div class="row">
                <div
                  class="col-xl-2 col-lg-2 col-md-4 col-sm-5 col-5 br bb bodyOfProd"
                  v-for="(drink, index) in drinks"
                  :key="drink._id"
                >
                  <div class="history-box">
                    <div class="a-spacing-top-base asin-title">
                      <span class="a-text-normal">
                        <div class="p13n-sc-truncated">{{ drink.drink }}</div>
                      </span>
                    </div>

                    <div class="a-spacing-top-base asin-title">
                      <span class="a-text-normal">
                        <div class="p13n-sc-truncated">
                          {{ drink.description }}
                        </div>
                      </span>
                    </div>

                    <div class="a-row">
                      <span class="a-size-base a-color-price">
                        <span class="p13n-sc-price">{{ drink.price }}$</span>
                      </span>
                    </div>

                    <div class="a-row">
                      <nuxt-link
                        :to="`/Admin/Drinks/${drink._id}`"
                        class="btn margin-right-10"
                        >Update</nuxt-link
                      >
                      <a
                        @click="deleteDrink(drink._id, index)"
                        class="btn margin-right-10"
                        >Delete</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <nuxt-link to="/Admin/Drinks"
                ><button class="btn btn-primary">
                  + Add new Drink
                </button></nuxt-link
              >
            </div>
          </div>
          <div v-else>
            <h1 class="text-center" style="height: 800px">
              You have no Admin rights
            </h1>
          </div>
        </div>
      </div>
    </div>
  </navbar>
</template>

<script>
import Navbar from "~/components/mainNavbar.vue";
export default {
  async asyncData({ $axios }) {
    try {
      let responseFlavor = await $axios.$get(
        "http://localhost:3000/Shisha@home/flavor"
      );
      let responseDrink = await $axios.$get(
        "http://localhost:3000/Shisha@home/drink"
      );

      return {
        flavors: responseFlavor.flavors,
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
    async deleteFlavor(id, index) {
      try {
        let response = await this.$axios.$delete(
          `http://localhost:3000/Shisha@home/flavor/${id}`
        );
        console.log(this.flavors);
        if (response.status) {
          this.flavors.splice(index, 1);
        }
      } catch (error) {
        console.log(err);
      }
    },

    async deleteDrink(id, index) {
      try {
        let response = await this.$axios.$delete(
          `http://localhost:3000/Shisha@home/drink/${id}`
        );

        if (response.status) {
          this.drinks.splice(index, 1);
        }
      } catch (error) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.top_section {
  height: 1080px;
}
#container-whole {
  padding: 5px;
}
.bodyOfProd {
  background-color: rgba(255, 255, 255, 0.3);
  margin-bottom: 5%;
  margin-right: 30px;
  padding: 1%;
}

.btn {
  background-color: white;
  color: #82260e;
  border: 0;
  margin-bottom: 2%;
}

.btn:hover {
  background-color: #295406;
  color: white;
}

.font-color {
  color: white;
  margin-left: auto;
  margin-right: auto;
}

.addProductAdmin {
  padding: 15px;
  margin: auto;
  margin-top: 2%;
  margin-bottom: 5%;
  background-color: #82260e;
  box-shadow: 0 0 5px 5px white;
}
</style>