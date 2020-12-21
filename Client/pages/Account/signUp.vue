<template>
  <navbar>
    <div class="container-fluid">
      <div class="row ">
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-1 col-xs-1"></div>
        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-10 col-xs-10">
          <div class="text-center" >
            <div class="form-signin">
              <h1 class="h3 mb-3 font-weight-normal link">Registrieren</h1>
              <hr />
              <div class="row">
                <input
                  type="text"
                  id="userName"
                  class="form-control"
                  placeholder="Benutzername"
                  v-model="name"
                />
                <input
                  type="email"
                  id="inputEmail"
                  class="form-control"
                  placeholder="Email Adresse"
                  v-model="email"
                />
              </div>
              <div class="row">
                <input
                  type="password"
                  id="inputPassword"
                  class="form-control"
                  placeholder="Passwort"
                  v-model="password"
                />
                <input
                  id="firstName"
                  type="text"
                  class="form-control"
                  v-model="firstName"
                  placeholder="Vorname"
                />
              </div>
              <div class="row">
                <input
                  id="lastName"
                  type="text"
                  class="form-control"
                  v-model="lastName"
                  placeholder="Nachname"
                />
                <input
                  id="address"
                  type="text"
                  class="form-control"
                  v-model="address"
                  placeholder="Addresse"
                />
              </div>
              <div class="row">
                <input
                  id="plz"
                  type="text"
                  class="form-control"
                  v-model="plz"
                  placeholder="PLZ"
                />
                <input
                  id="city"
                  type="text"
                  class="form-control"
                  v-model="city"
                  placeholder="Ort"
                />
              </div>
              <hr />
              <button
                class="btn btn-lg btn-primary btn-block"
                @click="signUpUser()"
              >
                Registrieren
              </button>
              <p class="mt-5 mb-4 text-muted"><router-link to="/" href="#"><img src="/images/Logo_Shisha_at_Home.png" height="80" width="180" alt="Logo vom Unternehmen"></router-link></p>
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
  middleware: "auth",
  auth: "guest",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      plz: "",
      city: "",
    };
  },
  components: {
    "navbar": Navbar
  },
  methods: {
    async signUpUser() {
      try {
        let loginData = {
          name: this.name,
          email: this.email,
          password: this.password,
          firstName: this.firstName,
          lastName: this.lastName,
          address: this.address,
          plz: this.plz,
          city: this.city
        };
        let responseLoginData = await this.$axios.$post(
          "http://localhost:3000/Shisha@home/auth/signup",
          loginData
        ); // make a post request to "Shisha@home/auth/signup"

        if (responseLoginData.success) {
          //if the response is true then go in this
          this.$auth.loginWith("local", {
            // make a server request to "Shisha@home/auth/login" with data and also a request to "api/auth/user" to get the user data, so that it can be stored in vuex store and localy in the browser and cookies
            data: {
              email: this.email,
              password: this.password,
            },
          });
        }

      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style scoped>
.form-control {
  max-width: 40%;
  margin: auto;
  margin-top: 40px;
}
.form-signin {
  width: 100%;
  max-width: 700px;
  padding: 15px;
  margin: auto;
  margin-top: 5%;
  margin-bottom: 5%;
  background-color: #82260E;
  box-shadow: 0 0 5px 5px white;
}
.btn {
  background-color: white;
  color: #82260E;
  border: 0;
}

.btn:hover {
  background-color: #295406;
  color: white;
}

.link {
  color: white;
}

@media (max-width: 575px) {
.form-control {
  max-width: 40%;
  margin: auto;
  margin-top: 10px;
}

}
</style>