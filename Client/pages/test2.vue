<template>
  <body class="top_section cross_layout">
    <nav>
      <input type="checkbox" id="click" />
      <label for="click" class="menu-btn">
        <i class="fa fa-bars"></i>
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
          <router-link to="/Transaction/tutorial" href="#"
            >Erklärung</router-link
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
        <li><router-link to="/Account/signIn" href="#" v-if="$auth.$state.loggedIn == false">Einloggen</router-link></li>
        <li><a
                href="#"
                v-show="$auth.$state.loggedIn == true"
                @click="logOut()"
              >
                Ausloggen
              </a></li>
      </ul>
    </nav>
    <div class="row">
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
        <slot></slot>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
    </div>
    
  </body>
</template>

<script>
export default {
  methods: {
    async logOut() {
      await this.$auth.logout();
      this.$router.go(0);
    }
  },
};
</script>

<style scopped>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
nav {
  display: flex;
  height: 80px;
  width: 100%;
  background: rgba(130, 38, 14, 0.5);
  align-items: center;
  justify-content: space-between;
  padding: 0 50px 0 100px;
  flex-wrap: wrap;
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
nav ul li a{
  color: #f2f2f2;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  padding: 8px 15px;
  border-radius: 5px;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}
nav ul li a.active,
nav ul li a:hover {
  color: #82260e;
  background: #fff;
}
nav .menu-btn i {
  color: #fff;
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
    background: #111;
    height: 100vh;
    width: 100%;
    text-align: center;
    display: block;
    transition: all 0.3s ease;
  }
  #click:checked ~ ul {
    left: 0;
  }
  nav ul li {
    width: 100%;
    margin: 40px 0;
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
    color: cyan;
  }
}
.content {
  position: relative;

  transform: translate(-50%, -50%);
  text-align: center;
  z-index: -1;
  width: 100%;
  padding: 0 30px;
  color: #1b1b1b;
}
.content div {
  font-size: 40px;
  font-weight: 700;
}
</style>