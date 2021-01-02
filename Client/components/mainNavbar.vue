<template>
  <body class="top_section cross_layout">
    <!-- section -->
    <section id="home">
      <div class="row">
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 Sidebar" tabindex="0">
          <transition name="slide">
            <div class="sideBarNew" v-if="sidebarOpen">
              <div class="sidebarMenü">
                <router-link
                  to="/Account/signIn"
                  href="#"
                  style="color: white; font-size: 40px"
                  >Einloggen</router-link
                >
              </div>
              <hr style="background-color: white" />
              <router-link to="/Transaction/Offer/products" href="#">
                <div class="sidebarContent">Angebot</div>
              </router-link>
              <router-link
                to="/Account/profil"
                href="#"
                v-if="$store.state.auth.loggedIn == true"
              >
                <div class="sidebarContent">Profil</div>
              </router-link>
              <router-link to="/Transaction/cart" href="#">
                <div class="sidebarContent">Warenkorb</div>
              </router-link>
              <router-link to="/Game/chooseGame" href="#">
                <div class="sidebarContent">Shisha-Spiel</div>
              </router-link>
              <router-link to="/Transaction/calculator" href="#">
                <div class="sidebarContent">Kalkulator</div>
              </router-link>
              <router-link to="/Transaction/tutorial" href="#">
                <div class="sidebarContent">Erklärung</div>
              </router-link>
              <a
                class="navContent"
                href="#"
                v-show="$auth.$state.loggedIn == true"
                @click="logOut()"
              >
                <div class="sidebarContent">Ausloggen</div>
              </a>
            </div>
          </transition>
        </div>
        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
          <!-- header -->
          <header>
            <!-- header inner -->
            <div class="container-fluid">
              <div class="row">
                <div
                  class="col-lg-3 col col-xl-3 col-sm-3 col-md-3 col-xs-3"
                  style="margin-top: 20px"
                >
                  <a
                    href="#"
                    @keyup.enter="showSidebar"
                    aria-label="Seiten Menü anzeigen"
                  >
                    <i
                      class="fa fa-bars header-all"
                      style="transform: scale(3); cursor: pointer; float: left"
                      @click="showSidebar"
                    ></i>
                  </a>
                </div>
                <div class="col-lg-9 col col-xl-9 col-sm-9 col-md-9 col-xs-9">
                  <div class="right_header_info">
                    <router-link to="/" aria-label="zur Startseite zurückkehren"
                      ><i class="fa fa-home home-button header-all"></i
                    ></router-link>
                    <router-link
                      to="/Transaction/cart"
                      class="text-center header-content header-all"
                      style="margin-top: -20px"
                      :aria-label="
                        'Gesamtprodukte im Einkaufswagen ' +
                        $store.state.totalProduct
                      "
                    >
                      {{ $store.state.totalProduct }}
                      <br />
                      <i
                        class="fa fa-shopping-cart"
                        style="transform: scale(2.5)"
                      ></i>
                    </router-link>

                    <router-link
                      id="sidebarCollapse"
                      to="/Account/profil"
                      class="header-content header-all"
                      v-if="$auth.$state.loggedIn == true"
                      aria-label="Profil anschauen"
                    >
                      {{ $auth.$state.user.name }}&nbsp;&nbsp;
                      <i
                        class="fa fa-user-circle"
                        style="transform: scale(2)"
                      ></i>
                    </router-link>
                    <router-link
                      to="/"
                      class="header-content header-all"
                      href="#"
                      v-else
                      aria-label="Anmelden um Profil anzuschauen"
                    >
                      <i
                        class="fa fa-user-circle"
                        style="transform: scale(2)"
                      ></i>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <!-- end header inner -->
          </header>
          <slot></slot>
          <!-- end header -->
        </div>
      </div>
    </section>
    <!-- end section -->
  </body>
</template>   

<script>
export default {
  data() {
    return {
      sidebarOpen: false,
    };
  },
  methods: {
    async logOut() {
      await this.$auth.logout();
      this.$router.go(0);
    },
    showSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
  },
};
</script>

<style scopped>
.home-button {
  color: white;
  transform: scale(3);
  margin-left: 30%;
}

@media (max-width: 575px) {
  .home-button {
    margin-left: -40%;
  }
}
</style>
      
      