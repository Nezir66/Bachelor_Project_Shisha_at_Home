<template>
  <body>
        <navbar>
          <section>
            <div class="container-fluid">
              <div class="row">
                <div class="full slider_cont_section">
                  <h1>Wilkommen</h1>
                  <p>Auf eine schöne Pfeife...</p>
                  <div class="logo">
                    <router-link to="/Transaction/Offer/products" href="#"
                      ><img
                        src="/images/Logo_Shisha_at_Home.png"
                        height="220"
                        width="500"
                        alt="Logo vom Unternehmen Shisha @ Home"
                        class="img-responsive"
                    /></router-link>
                  </div>
                  <div class="button_section_red">
                    <router-link to="/Transaction/Offer/products" href="#"
                      >Jetzt bestellen</router-link
                    >
                    <div v-if="$store.state.auth.loggedIn == true">
                      <router-link
                        to="/Admin/addNewProducts"
                        v-if="$store.state.auth.user.name == 'Admin'"
                        >Go Admin</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </navbar>

        <!-- section -->
        <div id="about" class="section layout_padding dark_bg_orange">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="center">
                  <h2 class="heading_main orange_heading" tabindex="0">
                    Angebot
                  </h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 top-product-desc">
                <h3 class="main_heading _left_side">Shisha</h3>
                <p class="large p-black">
                  Sie könen bei uns, für eine bestimmte Zeit, eine Shisha
                  bestellen.
                </p>
                <div class="center button_section_white margin_top_30">
                  <router-link
                    to="/Transaction/Offer/orderFlavor"
                    href="#"
                    aria-label="Shisha Angebote anzeigen"
                    >Angebot</router-link
                  >
                </div>
              </div>

              <div class="col-lg-8">
                <img
                  class="img-responsive img-hookah"
                  src="/images/shisha-unity-magnum-pure.jpg"
                  alt="Bild von einer Unity Shisha"
                />
              </div>
            </div>
            <hr />
          </div>
        </div>
        <!-- end section -->

        <!-- section -->
        <div class="section layout_padding padding_top_0 bottom-drink-section dark_bg_orange">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <img
                  class="img-responsive img-drink"
                  src="/images/Getränk.jpg"
                  style="transform: scale(0.8); float: left"
                  alt="Bild von verschiedenen Getränken"
                />
              </div>
              <div class="col-lg-4 top-product-desc">
                <h3 class="main_heading _left_side">Erfrischende Getränke</h3>
                <p class="large p-black">
                  Zu jeder Shisha darf natürlich ein kaltes Getränk nicht
                  fehlen, deswegen haben Sie auch bei uns eine große Auswahl an
                  Getränken
                </p>
                <div class="full center button_section_white margin_top_30">
                  <router-link
                    to="/Transaction/Offer/orderDrink"
                    href="#"
                    aria-label="Getränke Angebote anzeigen"
                    >Angebot</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end section -->

        <!-- section -->
        <section
          id="why_choose_us"
          class="dark_bg_blue layout_padding cross_layout padding_top_0"
        >
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="full center">
                  <h2 class="heading_main orange_heading" tabindex="0">
                    Ablauf
                  </h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4">
                <div class="full">
                  <div class="choose_blog text_align_center" tabindex="0">
                    <i
                      class="fa fa-cart-arrow-down icon-how-to"
                    ></i>
                    <br />
                    <h3 aria-label="Erstens Bestellung aufgeben.">
                      Bestellung Aufgeben
                    </h3>
                    <p>
                      Wählen Sie die Produkte die Sie gerne Bestellen möchten
                      aus und bezahlen dann diese.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="full">
                  <div class="choose_blog text_align_center" tabindex="0">
                    <i
                      class="fa fa-hourglass-start icon-how-to"
                    ></i>
                    <h3 aria-label="Zweitens Vorbereitung.">Vorbereitung</h3>
                    <p>
                      Nachdem die Bezhalung erfolgreich abgeschlossen ist, wird
                      Ihre Bestellung von den Mitarbeitern vorbereitet und so
                      schnell wie möglich zu Ihnen geliefert.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="full">
                  <div class="choose_blog text_align_center" tabindex="0">
                    <i
                      class="fa fa-flag-checkered icon-how-to"
                    ></i>
                    <h3 aria-label="Drittens Ankunft.">Ankunft</h3>
                    <p>
                      Nachdem die Bestellung geliefet wurde bekommen Sie von den
                      Mitarbeitern eine kurze Erklärung zur Aufbau der
                      Wasserpfeife. Danach können Sie gemüdlich Ihre Shisha
                      genießen.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="full center button_section_red">
                  <router-link
                    to="/Transaction/tutorial"
                    href="#"
                    aria-label="Mehr über den Ablauf erfahren"
                    >Mehr Erfrahren</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- end section -->

        <!-- section -->
        <section
          id="testimonial"
          class="dark_bg_orange layout_padding cross_layout_o padding_top_0"
        >
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="full center">
                  <h2 class="heading_main orange_heading" tabindex="0">
                    Über uns
                  </h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="full">
                  <div
                    id="testimonial_slider"
                    class="carousel slide"
                    data-ride="carousel"
                  >
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                          <div class="center">
                            <div class="client_img">
                              <img
                                src="/images/Basar.jpeg"
                                height="280"
                                width="200"
                                alt="Bild von Basar Nezir, einer der Besitzer"
                              />
                            </div>
                          </div>
                          <div class="testimonial_cont text_align_center">
                            <p class="p-black" tabindex="0">
                              <strong style="color:black;">Nezir Basar</strong><br /><strong
                                class="orange_color"
                                >Student</strong
                              ><br /><br /><i
                                >Mein Name ist Nezir Basar und ich bin 22 Jahre
                                alt. Schon immer habe ich das Rauchen von
                                Wasserpfeifen geliebt, jedoch ist durch Corona
                                und den neuen Gesetzeslagen, nicht mehr möglich
                                ganz einfach in eine Shisha Bar zu gehen.
                                Deswegen haben wir es uns zur Aufgabe gemacht
                                die Bar zu euch Nachhause zu bringen, damit Ihr
                                noch gemütlich eure Pfeife rauchen könnts.</i
                              >
                            </p>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- end section -->

        <!-- section -->
        <section
          id="contact"
          class="dark_bg_blue layout_padding cross_layout padding_top_0 margin_top_0"
        >
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="full center">
                  <h2 class="heading_main orange_heading" tabindex="0">
                    Kontaktieren
                  </h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="contact col-md-6">
                <div class="full">
                  <div class="contact_form">
                    <form action="mailto:Nezirbasar@outlook.com" method="post" enctype="text/plain">
                      <fieldset class="row">
                        <div class="col-md-12">
                          <div class="field">
                            <label for="name" class="label-hide">Name</label>
                            <input type="text" id="name" placeholder="Name" name="name" />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="field">
                            <label for="email" class="label-hide">Email</label>
                            <input
                              type="email"
                              id="email"
                              placeholder="E-mail"
                              name="email"
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="field">
                            <label for="number" class="label-hide">Nummer</label>
                            <input
                              type="text"
                              id="number"
                              placeholder="Nummer"
                              name="number"
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="field">
                            <label for="message" class="label-hide">Nachricht</label>
                            <textarea
                              id="message"
                              placeholder="Nachricht"
                              aria-label="Ihre Nachricht"
                            ></textarea>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="center">
                            <button type="submit" class="btn extra">Senden</button>
                          </div>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- end section -->
  </body>
</template>

<script>
import Navbar from "~/components/mainNavbar.vue";
export default {
  data() {
    return {
      theme: '',
    }
  },
  components: {
    navbar: Navbar,
  }
  // created() {
  //   if (
  //     this.$store.state.login == false &&
  //     this.$store.state.auth.loggedIn == true
  //   ) {
  //     this.$store.commit("changeLogToTrue");
  //     this.$router.go(0);
  //   }
  // },
  // mounted() {
  //   this.$store.commit("changeLogToFalse");
  // },
};
</script>

<style scoped>
</style>
