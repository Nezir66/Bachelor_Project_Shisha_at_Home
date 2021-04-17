<template>
  <navbar>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-1 col-xs-1"></div>
        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-10 col-xs-10">
          <div class="text-center">
            <div class="form-signup">
              <h1 class="center" style="color: white" tabindex="0">
                Registrieren
              </h1>
              <hr />
              <div class="row">
                <label for="userName" class="label-hide">Benutzername</label>
                <input
                  type="text"
                  id="userName"
                  class="form-control"
                  placeholder="Benutzername"
                  v-model="name"
                  required
                />
                <label for="inputEmail" class="label-hide">Email</label>
                <input
                  type="email"
                  id="inputEmail"
                  class="form-control"
                  placeholder="Email Adresse"
                  v-model="email"
                  required
                />
              </div>
              <div class="row">
                <label for="inputPassword" class="label-hide">Passwort</label>
                <input
                  type="password"
                  id="inputPassword"
                  class="form-control"
                  placeholder="Passwort"
                  v-model="password"
                  required
                />
                <label for="firstName" class="label-hide">Vorname</label>
                <input
                  id="firstName"
                  type="text"
                  class="form-control"
                  v-model="firstName"
                  placeholder="Vorname"
                  required
                />
              </div>
              <div class="row">
                <label for="lastName" class="label-hide">Nachname</label>
                <input
                  id="lastName"
                  type="text"
                  class="form-control"
                  v-model="lastName"
                  placeholder="Nachname"
                  required
                />
                <label for="address" class="label-hide">Addresse</label>
                <input
                  id="address"
                  type="text"
                  class="form-control"
                  v-model="address"
                  placeholder="Adresse"
                  required
                />
              </div>
              <div class="row">
                <label for="plz" class="label-hide">Postleitzahl</label>
                <input
                  id="plz"
                  type="text"
                  class="form-control"
                  v-model="plz"
                  placeholder="PLZ"
                  required
                />
                <label for="city" class="label-hide">Ort</label>
                <input
                  id="city"
                  type="text"
                  class="form-control"
                  v-model="city"
                  placeholder="Ort"
                  required
                />
              </div>
              <hr />
              <button
                class="btn btn-lg btn-block"
                @click="signUpUser()"
                @keyup.enter="signUpUser()"
              >
                Registrieren
              </button>
              <p class="mt-5 mb-4 text-muted">
                <router-link to="/" href="#"
                  ><img
                    src="/images/Logo_Shisha_at_Home.png"
                    height="80"
                    width="180"
                    alt="Logo vom Unternehmen"
                /></router-link>
              </p>
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
    navbar: Navbar,
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
          city: this.city,
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
          }).then(()=>{
          this.$router.go(0);
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


.link {
  color: white;
}

@media (max-width: 575px) {
  .form-control {
    max-width: 40%;
    margin: auto;
    margin-top: 10px;
  }

  .form-signup {
    margin-top: 0;
  }
}
</style>