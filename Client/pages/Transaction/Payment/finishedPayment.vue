<template>
  <navbar>
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-xl-9 col-lg-9 col-md-12 col-sm-10 col-xs-10"
          style="margin: auto"
        >
          <div class="finishedPayment">
            <h2 class="center" style="color: white" tabindex="0">
              Ihre Zahlung wurde erfolgreich durchgeführt
            </h2>
            <br />
            <router-link to="/" class="btn btn-primary" tabindex="0">
              Zurück zur Startseite
            </router-link>
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
    navbar: Navbar,
  },
};
</script>

<style scoped>
</style>
