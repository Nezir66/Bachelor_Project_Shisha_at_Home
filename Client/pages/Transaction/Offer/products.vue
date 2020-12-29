<template>
  <navbar>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="background">
            <div class="flavorBody">
              <router-link to="/Transaction/Offer/orderFlavor">
              <h1>Shisha</h1>
              <img src="/images/Lava-United-Shisha-silber.jpg" alt="Bild link um auf die Shisha bestell Seite zu kommen" class="img-products-body">
              </router-link>
            </div>
            <div class="drinkBody">
              <router-link to="/Transaction/Offer/orderDrink">
              <h1>Getränk</h1>
              <img src="/images/cocktail_2.jpg" alt="Bild link um auf die Getränk bestell Seite zu kommen" class="img-products-body">
              </router-link>
            </div>
        </div>
        </div>
      </div>
    </div>
  </navbar>
</template>

<script>
import Navbar from "~/components/mainNavbar.vue";
export default {
  components: {
    "navbar": Navbar,
  }
};
</script>

<style scoped>
a{
  color: white;
}
</style>
