<template>
  <navbar>
      <div class="container-fluid">
        <div class="row" >
          <div class="col-xl-2 col-lg-2 col-sm-1 col-xs-1"></div>
          <div class="col-xl-8 col-lg-8 col-md-12 col-sm-10 col-xs-10">
            <div class="profil fontColor">
            <h1>Persönliche Daten</h1>
            <hr />
            <data-user
              ><template v-slot:userName>{{ $auth.$state.user.name }}</template>
              <template v-slot:email>{{ $auth.$state.user.email }}</template>
              <template v-slot:firstName>{{ $auth.$state.user.firstName }}</template>
              <template v-slot:lastName>{{ $auth.$state.user.lastName }}</template>
              <template v-slot:address>{{ $auth.$state.user.address }}</template>
              <template v-slot:plz>{{ $auth.$state.user.plz }}</template>
              <template v-slot:city>{{ $auth.$state.user.city }}</template>
            </data-user>
            <br />
            <button
              class="btn btn-primary"
              
              @click="payProduct"
            >
              Weiter
            </button>
            </div>
          </div>
          <div class="col-xl-2 col-lg-2 col-sm-1 col-xs-1"></div>
        </div>
      </div>
  </navbar>
</template>
<script>
import DataUser from "~/components/forProfilRow";
import Navbar from "~/components/mainNavbar.vue";
export default {
  components: {
    "navbar": Navbar,
    "data-user": DataUser,
  },
  methods: {
    payProduct() {
      this.$router.push("/Transaction/Payment/productPayment");
    },
  },
};
</script>

<style scopped>
.changeData {
  width: 100%;
  max-width: 500px;
  padding: 15px;
  margin: auto;
  margin-top: 2%;
  background-color: #82260e;
  box-shadow: 0 0 5px 5px white;
}

.profil {
  padding: 15px;
  margin: auto;
  margin-top: 2%;
  background-color: #82260e;
  box-shadow: 0 0 5px 5px white;
}

.btn {
  background-color: white;
  color: #82260e;
  border: 0;
  float: right;
  margin-top: -30px;
}

.btn:hover {
  background-color: #295406;
  color: white;
}

.link {
  color: white;
}

.fontColor {
  color: white;
}

.link:hover {
  color: #295406;
}
  
</style>