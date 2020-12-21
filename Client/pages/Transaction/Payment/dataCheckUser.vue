<template>
  <div class="container-fluid">
    <div class="row" style="height: 770px; padding-bottom: 100px">
      <div class="col-xl-2"></div>
      <div class="col-xl-8 col-lg-8 col-md-8 col-sm-10 col-xs-10">
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
          style="float: right"
          @click="payProduct"
        >
          Weiter
        </button>
      </div>
      <div class="col-xl-2"></div>
    </div>
  </div>
</template>
<script>
import DataUser from "~/components/forProfilRow";
export default {
  components: {
    "data-user": DataUser,
  },
  methods: {
    payProduct() {
      this.$router.push("/Payment/productPayment");
    },
  },
};
</script>