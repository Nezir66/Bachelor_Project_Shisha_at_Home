<template>
  <navbar>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-2 col-lg-2 col-sm-1 col-xs-1"></div>
        <div class="col-xl-8 col-lg-8 col-md-12 col-sm-10 col-xs-10">
          <div v-if="$store.state.auth.loggedIn == true">
            <div class="profil fontColor" v-if="switchToChangeData == false">
              <h1 class="center" style="color: white" tabindex="0">Profil</h1>
              <hr />
              <data-user tabindex="0">
                <template v-slot:userName>{{
                  $auth.$state.user.name
                }}</template>
                <template v-slot:email>{{ $auth.$state.user.email }}</template>
                <template v-slot:firstName>{{
                  $auth.$state.user.firstName
                }}</template>
                <template v-slot:lastName>{{
                  $auth.$state.user.lastName
                }}</template>
                <template v-slot:address>{{
                  $auth.$state.user.address
                }}</template>
                <template v-slot:plz>{{ $auth.$state.user.plz }}</template>
                <template v-slot:city>{{ $auth.$state.user.city }}</template>
              </data-user>
              <br />
              <button class="btn btn-primary" @click="switchToChange()">
                Daten ändern
              </button>
            </div>

            <div class="changeData text-center fontColor" v-else>
              <h1
                class="center"
                style="color: white; cursor: pointer"
                @click="switchToChange()"
                @keyup.enter="switchToChange()"
                tabindex="0"
              >
                Profil
              </h1>
              <br />
              <label for="inputUsername" class="label-hide">Benutzername</label>
              <input
                type="text"
                id="inputUsername"
                class="form-control"
                :placeholder="$auth.$state.user.name"
                v-model="name"
                autofocus
              />
              <br />
              <label for="inputEmail" class="label-hide">Email</label>
              <input
                type="email"
                id="inputEmail"
                class="form-control"
                :placeholder="$auth.$state.user.email"
                v-model="email"
              />
              <br />
              <label for="inputPassword" class="label-hide">Passwort</label>
              <input
                type="password"
                id="inputPassword"
                class="form-control"
                placeholder="Dein Passwort"
                v-model="password"
              />
              <br />
              <label for="firstName" class="label-hide">Vorname</label>
              <input
                type="text"
                id="firstName"
                class="form-control"
                :placeholder="$auth.$state.user.firstName"
                v-model="firstName"
              />
              <br />
              <label for="lastName" class="label-hide">Nachname</label>
              <input
                type="text"
                id="lastName"
                class="form-control"
                :placeholder="$auth.$state.user.lastName"
                v-model="lastName"
              />
              <br />
              <label for="address" class="label-hide">Addresse</label>
              <input
                type="text"
                id="address"
                class="form-control"
                :placeholder="$auth.$state.user.address"
                v-model="address"
              />
              <br />
              <label for="plz" class="label-hide">Postleitzahl</label>
              <input
                type="number"
                id="plz"
                class="form-control"
                :placeholder="$auth.$state.user.plz"
                v-model="plz"
              />
              <br />
              <label for="city" class="label-hide">Ort</label>
              <input
                type="text"
                id="city"
                class="form-control"
                :placeholder="$auth.$state.user.city"
                v-model="city"
              />
              <hr />
              <button
                class="btn btn-lg btn-primary btn-block"
                @click="updateUser()"
                @keyup.enter="updateUser()"
              >
                Ändern
              </button>
              <a class="link" href="#" @click="logOut()" @keyup.enter="logOut()"
                >Ausloggen</a
              >
              <br />
              <a
                class="link"
                href="#"
                @click="deleteUser()"
                @keyup.enter="deleteUser()"
                >Benutzer Löschen</a
              >
              <p class="mt-2 mb-1 text-muted">© 2020</p>
            </div>
          </div>
          <div v-else>
            <h1 style="color: white; text-align: center" tabindex="0">
              Nicht Angemeldet
            </h1>
          </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-sm-1 col-xs-1"></div>
      </div>
    </div>
  </navbar>
</template>

<script>
import DataUser from "~/components/forProfilRow.vue";
import Navbar from "~/components/mainNavbar.vue";
export default {
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
      switchToChangeData: false,
    };
  },
  components: {
    navbar: Navbar,
    DataUser,
  },
  methods: {
    async updateUser(index) {
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
      try {
        let responseLoginData = await this.$axios.$put(
          "http://localhost:3000/Shisha@home/auth/updateUser",
          loginData
        );
        if (responseLoginData.success) {
          this.name = "";
          this.email = "";
          this.password = "";
          this.firstName = "";
          this.lastName = "";
          this.address = "";
          this.plz = "";
          this.city = "";

          await this.$auth.fetchUser();
          this.switchToChangeData = false;
          this.$router.go(0);
        }
      } catch (err) {
        console.log(err);
      }
    },
    async logOut() {
      await this.$auth.logout();
      this.$router.push("/");
    },
    async deleteUser() {
      try {
        let response = await this.$axios.$delete(
          "http://localhost:3000/Shisha@home/auth/deleteUser"
        );
        if (response.status) {
          await this.$auth.logout();
          res.json({
            success: true,
            message: "Successfully deleted user",
          });
        }
      } catch (err) {
        console.log(err);
      }
    },
    switchToChange() {
      this.switchToChangeData = !this.switchToChangeData;
    },
  },
};
</script>

<style scoped>
p {
  font-size: 15px;
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

@media (max-width: 575px) {
  .form-control {
    max-width: 100%;
    margin: auto;
  }
}
</style>
