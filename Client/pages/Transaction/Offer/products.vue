<template>
  <navbar>
    <div class="container-fluid">
      <div class="row">
        
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-1 col-xs-1"></div>
        
        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-10 col-xs-10">
          <div class="background">
            <div class="flavorBody">
              <router-link to="/Transaction/Offer/orderFlavor">
              <h1>Shisha</h1>
              <img src="/images/Lava-United-Shisha-silber.jpg" alt="" class="img-responsive">
              </router-link>
            </div>
            <div class="drinkBody">
              <router-link to="/Transaction/Offer/orderDrink">
              <h1>Getränk</h1>
              <img src="/images/cocktail_2.jpg" alt="" class="img-responsive">
              </router-link>
            </div>
        </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-1 col-xs-1"></div>
        
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

.background {
  padding: 30px;
  margin: auto;
  margin-top: 2%;
  background-color: #82260E;
  box-shadow: 0 0 5px 5px white;
}

.flavorBody{
  cursor: pointer;
  display: inline-block;
  text-align: center;

}

.drinkBody{
  cursor: pointer;
  text-align: center;
  display: inline-block;
  margin-left: 11%;
}

a{
  color: white;
}

.flavorBody:hover {
  transform: scale(1.03);
  opacity: 1;
}

.drinkBody:hover {
  transform: scale(1.03);
  opacity: 1;
}
</style>
