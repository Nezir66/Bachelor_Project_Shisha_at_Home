<template >
  <navbar>
    <div class="container-fluid">
      <div class="row wholeBody">
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-1 col-xs-1"></div>
        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-10 col-xs-10">
          <div class="text-center" style="height: 570px">
            <div class="form-signin">
              <h1 class="center" style="color: white" tabindex="0">
                Einloggen
              </h1>
              <hr />
              <input
                type="email"
                id="inputEmail"
                class="form-control"
                placeholder="Email Adresse"
                v-model="email"
              />
              <input
                type="password"
                id="inputPassword"
                class="form-control"
                placeholder="Passwort"
                v-model="password"
              />
              <hr />
              <button
                class="btn btn-lg btn-primary btn-block"
                @click="loginUser()"
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
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 500px;
  padding: 15px;
  margin: auto;
  margin-top: 5%;
  background-color: #82260e;
  box-shadow: 0 0 5px 5px white;
}
.form-control {
  margin-top: 40px;
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

.link {
  color: white;
}

.link:hover {
  color: #295406;
}

@media (max-width: 575px) {
  .form-signin {
    margin-top: 0;
  }
}
</style>