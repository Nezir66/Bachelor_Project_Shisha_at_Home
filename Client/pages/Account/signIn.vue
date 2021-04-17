<template >
  <navbar>
    <div class="container-fluid">
      <div class="row wholeBody">
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-1 col-xs-1"></div>
        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-10 col-xs-10">
          <div class="text-center" style="height: 570px">
            <div class="form-signin">
              <h1 class="center" tabindex="0">
                Einloggen
              </h1>
              <hr />
              <label for="inputEmail" class="label-hide">Email</label>
              <input
                type="email"
                id="inputEmail"
                class="form-control"
                placeholder="Email Adresse"
                v-model="email"
              />
              <label for="inputPassword" class="label-hide">Passwort</label>
              <input
                type="password"
                id="inputPassword"
                class="form-control"
                placeholder="Passwort"
                v-model="password"
                @keyup.enter="loginUser()"
              />
              <hr />
              <button
                class="btn btn-lg btn-block"
                @click="loginUser()"
                @keyup.enter="loginUser()"
              >
                Einloggen
              </button>
              <br />
              <router-link to="/Account/signUp" class="link">
                Registrieren
              </router-link>
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
  middleware: "auth", // We can visit the page login if only a User is not signed in
  auth: "guest",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: {
    navbar: Navbar,
  },
  methods: {
    async loginUser() {
      try {
        this.$auth.loginWith("local", {
          // make a server request to "Shishaqhome/auth/login" with data and also a request to "Shisha/auth/user" to get the user data, so that it can be stored in vuex store and localy in the browser and cookies
          data: {
            email: this.email,
            password: this.password,
          },
        }).then(()=>{
          this.$router.go(0);
        }).catch((err) => {
          if(err){
            alert("Falsche Eingangsdaten")
          }
        })

        // if(this.$auth.login() == Promise.reject(error)){
        //   console.log("Wrong password")
        // }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.form-control {
  margin-top: 40px;
}

@media (max-width: 575px) {
  .form-signin {
    margin-top: 0;
  }
}
</style>