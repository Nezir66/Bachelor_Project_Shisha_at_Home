<template>
  <navbar>
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-xl-9 col-lg-9 col-md-12 col-sm-10 col-xs-10"
          style="margin: auto"
        >
          <div class="profil fontColor">
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
.profil {
  padding: 15px;
  margin: auto;
  margin-top: 11%;
  background-color: #82260e;
  box-shadow: 0 0 5px 5px white;
  text-align: center;
}

.btn {
  background-color: white;
  color: #82260e;
  border: 0;
}

.btn:hover {
  background-color: #295406;
  color: white;
}
</style>
