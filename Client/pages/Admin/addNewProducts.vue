<template>
  <div class="container-fluid">
    <div class="row wholeBody">
      <div class="col-xl-2"></div>
      <div class="col-xl-8 col-lg-8 col-md-8 col-sm-10 col-xs-10">
        <div v-if="$auth.$state.user.name == 'Admin'">
          <!--Shisha Flavors-->
          <div id="container-whole" class="container-fluid browsing-history">
            <div class="row">
              <div
                class="col-xl-3 col-lg-3 col-md-4 col-sm-7 col-7 br bb bodyOfProd"
                v-for="(flavor, index) in flavors"
                :key="flavor._id"
              >
                <div class="history-box">
                  <a href="#" class="a-link-normal">
                    <img :src="flavor.photo" class="img-fluid" />
                  </a>

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
                      :to="`/flavors/${flavor._id}`"
                      class="a-button-history margin-right-10"
                      >Update</nuxt-link
                    >
                    <a
                      @click="deleteFlavor(flavor._id, index)"
                      class="a-button-history margin-right-10"
                      >Delete</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <nuxt-link to="/Admin/Flavors"
              ><a class="btn btn-primary" style="margin-top: 40px"
                >+ Add new Flavor</a
              ></nuxt-link
            >
          </div>

          <!--Drinks-->
          <div id="container-whole" class="container-fluid browsing-history">
            <div class="row">
              <div
                class="col-xl-3 col-lg-3 col-md-4 col-sm-7 col-7 br bb bodyOfProd"
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
                      :to="`/drinks/${drink._id}`"
                      class="a-button-history margin-right-10"
                      >Update</nuxt-link
                    >
                    <a
                      @click="deleteDrink(drink._id, index)"
                      class="margin-right-10"
                      >Delete</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <nuxt-link to="/drinks"
              ><a class="btn btn-primary" style="margin-top: 40px"
                >+ Add new Drink</a
              ></nuxt-link
            >
          </div>
        </div>
        <div v-else>
          <h1 class="text-center" style="height: 800px">
            You have no Admin rights
          </h1>
        </div>
      </div>
      <div class="col-xl-2"></div>
    </div>
  </div>
</template>

<script>
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
#container-whole {
  padding: 50px;
}
.bodyOfProd {
  background-color: rgba(15, 40, 50, 0.3);
    margin-top: 5%;
  margin-left: 30px;
}
</style>