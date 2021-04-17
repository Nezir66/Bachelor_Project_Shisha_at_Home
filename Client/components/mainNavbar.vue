<template>
  <body class="top_section cross_layout">
    <nav class="nav-main">
      <a href="#main" class="go-content">Zum Inhalt gelangen</a>
      <input type="checkbox" id="click" />
      <label for="click" class="menu-btn">
        <i class="fa fa-bars" style="transform: scale(2);"></i>
      </label>
      <ul>
        <li>
          <router-link to="/" aria-label="zur Startseite zurückkehren"
            >Startseite</router-link
          >
        </li>
        <li>
          <router-link to="/Transaction/Offer/products" href="#"
            >Angebot</router-link
          >
        </li>
        <li>
          <router-link to="/Transaction/cart" href="#">Warenkorb</router-link>
        </li>
        <li>
          <router-link to="/Game/quiz" href="#">Shisha-Spiel</router-link>
        </li>
        <li>
          <router-link
            id="sidebarCollapse"
            to="/Account/profil"
            class="active"
            v-if="$auth.$state.loggedIn == true"
            aria-label="Profil anschauen"
          >
            {{ $auth.$state.user.name }}&nbsp;&nbsp;
            <i class="fa fa-user-circle" style="transform: scale(2)"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/Transaction/calculator" href="#"
            >Kalkulator</router-link
          >
        </li>
        <li>
          <router-link
            to="/Account/profil"
            v-if="$auth.$state.loggedIn == true"
            aria-label="Profil anschauen"
            href="#"
            >Profil</router-link
          >
        </li>
        <li>
          <router-link to="/Account/signUp" href="#"
          v-if="$auth.$state.loggedIn == false"
            >Registrieren</router-link
          >
        </li>
        <li>
          <router-link
            to="/Account/signIn"
            href="#"
            v-if="$auth.$state.loggedIn == false"
            >Einloggen</router-link
          >
        </li>
        <li>
          <a href="#" v-show="$auth.$state.loggedIn == true" @click="logOut()">
            Ausloggen
          </a>
        </li>
      </ul>
      <button type="button" @click="toggleTheme()" class="btn btn-dark">{{ mode }}</button>
      <router-link
        to="/Transaction/cart"
        class="text-center header-content header-all"
        style="margin-top: -20px"
        :aria-label="
          'Gesamtprodukte im Einkaufswagen ' + $store.state.totalProduct
        "
      >
        {{ $store.state.totalProduct }}
        <br />
        <i class="fa fa-shopping-cart" style="transform: scale(2.5)"></i>
      </router-link>
    </nav>
    <div id="main" class="row">
      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
      <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
        <slot style="margin-top: 200px"></slot>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      mode: "light"
    };
  },
  methods: {
    async logOut() {
      await this.$auth.logout();
      this.$router.go(0);
    },
    changeIndex() {
      this.index = 1;
    },
    toggleTheme() {
            this.theme = this.theme == 'darkMode' ? '' : 'darkMode'; //toggles theme value
            this.mode = this.mode == 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', this.theme); // sets the data-theme attribute
            localStorage.setItem('theme', this.theme); // stores theme value on local storage
    }
  },
};
</script>

<style scopped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

nav .logo {
  color: #fff;
  font-size: 35px;
  font-weight: 600;
}
nav ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: auto;
}
nav ul li {
  margin: 0 5px;
}
nav ul li a {
  color: var(--text-color-body) !important;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  padding: 8px 15px;
  border-radius: 5px;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}
nav .menu-btn i {
  color: var(--text-color-body) !important;
  font-size: 22px;
  cursor: pointer;
  display: none;
}
input[type="checkbox"] {
  display: none;
}

@media (max-width: 1000px) {
  nav {
    padding: 0 40px 0 50px;
  }
}
@media (max-width: 920px) {
  nav {
    background: rgba(0, 0, 0, 0);
  }

  nav .menu-btn i {
    display: block;
  }
  #click:checked ~ .menu-btn i:before {
    content: "\f00d";
  }
  nav ul {
    position: fixed;
    top: 80px;
    left: -100%;
    background: #82260e;
    height: 100vh;
    width: 100%;
    text-align: center;
    display: block;
    transition: all 0.3s ease;
    z-index: 999;
  }
  #click:checked ~ ul {
    left: 0;
  }
  nav ul li {
    width: 100%;
    margin: 20px 0;
  }
  nav ul li a {
    width: 100%;
    margin-left: -100%;
    display: block;
    font-size: 20px;
    transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  #click:checked ~ ul li a {
    margin-left: 0px;
  }
  nav ul li a.active,
  nav ul li a:hover {
    background: none;
    color: white;
  }
}
@media (max-height: 680px) {
  nav ul li {
    margin: 15px 0;
  }
}

@media (max-height: 580px) {
  nav ul li {
    margin: 7px 0;
  }
}
</style>