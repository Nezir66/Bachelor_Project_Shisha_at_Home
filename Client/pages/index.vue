<template>
     <body class="main-layout">
   
   <div class="wrapper">

      <div id="content">
         <navbar>
            <section>
         <div class="container-fluid">
            <div class="row">
               <div class="col-md-5">
                  <div class="full slider_cont_section">
                     <h4>Wilkommen</h4>
                     <p>Auf eine schöne Pfeife...</p>
                     <div class="logo"> <router-link to="/Transaction/Offer/products" href="#"><img src="/images/Logo_Shisha_at_Home.png" height="220" width="750" alt="Logo vom Unternehmen" class="img-responsive"></router-link> </div>
                     <div class="button_section_red">
                        <router-link to="/Transaction/Offer/products" href="#">Jetzt bestellen</router-link>
                     </div>
                  </div>
               </div>
               <div class="col-md-7">
               </div>
            </div>
         </div>
      </section>
         </navbar>
      

      
      <!-- section --> 
      <div id="about" class="section layout_padding">
         <div class="container">
            
            <div class="row">

                 <div class="col-lg-4 margin_top_30">
               <div class="full margin_top_30">
                  <h3 class="main_heading _left_side margin_top_30">Shisha</h3>
                  <p class="large">Sie könen bei uns, für eine bestimmte Zeit, eine Shisha bestellen. </p>
               </div>
               <div class="full button_section_white margin_top_30">
                        <router-link to="/Transaction/Offer/orderFlavor" href="#">Angebot</router-link>
                     </div>
            </div>

            <div class="col-lg-8">
               <div class="full margin_top_50_rs">
                  <img class="img-responsive" src="/images/shisha-unity-magnum-pure.jpg" alt="Bild von einer Unity Shisha" />
               </div>
            </div>

               </div>

         </div>
      </div>
      <!-- end section -->

      <!-- section --> 
      <div class="section layout_padding padding_top_0">
         <div class="container">    
            <div class="row">
              <div class="col-lg-8">
               <div class="full text_align_right r-img">
                  <img class="img-responsive" src="/images/Getränk.jpg" style="transform: scale(0.8); float:left;" alt="Bild von einem Getränk" />
               </div>
            </div>
                 <div class="col-lg-4 margin_top_30">
               <div class="full margin_top_30">
                  <h3 class="main_heading _left_side margin_top_30">Erfrischende Getränke</h3>
                  <p class="large">Zu jeder Shisha darf natürlich ein kaltes Getränk nicht fehlen, deswegen haben Sie auch bei uns eine große Auswahl an Getränken</p>
               </div>
               <div class="full button_section_white margin_top_30">
                    <router-link to="/Transaction/Offer/orderDrink" href="#">Angebot</router-link>
                  </div>
            </div>
            </div>

         </div>
      </div>
      <!-- end section -->

      <!-- section -->
      <section id="why_choose_us" class="dark_bg_blue layout_padding cross_layout padding_top_0">
        <div class="container">
           <div class="row">
             <div class="col-md-12">
               <div class="full center">
                 <h2 class="heading_main orange_heading">Ablauf</h2>
               </div>
             </div>
           </div>
           <div class="row">
              <div class="col-lg-4">
                 <div class="full">
                    <div class="choose_blog text_align_center">
                        <i class="fa fa-cart-arrow-down" style="transform:scale(5); color: white; margin-bottom: 50px;"></i>
                        <br>
                        <h4>Bestellung Aufgeben</h4>
                        <p>Wählen Sie die Produkte die Sie gerne Bestellen möchten aus und bezahlen dann diese.</p>
                    </div>
                 </div>
              </div>
              <div class="col-lg-4">
                 <div class="full">
                    <div class="choose_blog text_align_center">
                        <i class="fa fa-hourglass-start" style="transform:scale(5); color: white; margin-bottom: 50px;"></i>
                        <h4>Vorbereitung</h4>
                        <p>Nachdem die Bezhalung erfolgreich abgeschlossen ist, wird Ihre Bestellung von den Mitarbeitern vorbereitet und so schnell wie möglich zu Ihnen geliefert.</p>
                    </div>
                 </div>
              </div>
              <div class="col-lg-4">
                 <div class="full">
                    <div class="choose_blog text_align_center">
                        <i class="fa fa-flag-checkered" style="transform:scale(5); color: white; margin-bottom: 50px;"></i>
                        <h4>Ankunft</h4>
                        <p>Nachdem die Bestellung geliefet wurde bekommen Sie von den Mitarbeitern eine kurze Erklärung zur Aufbau der Wasserpfeife. Danach können Sie gemüdlich Ihre Shisha genießen.</p>
                    </div>
                 </div>
              </div>
              <div class="col-md-12 margin_top_30">
                <div class="full center button_section_red margin_top_30">
                    <router-link to="/Transaction/tutorial" class="margin_top_30" href="#">Mehr Erfrahren</router-link>
                  </div>
              </div>
           </div>
        </div>
      </section>
      <!-- end section -->

       <!-- section -->
      <section id="testimonial" class="dark_bg_orange layout_padding cross_layout_o padding_top_0">
        <div class="container">
           <div class="row">
             <div class="col-md-12">
               <div class="full center">
                 <h2 class="heading_main orange_heading">Über uns</h2>
               </div>
             </div>
           </div>
           <div class="row">
              <div class="col-md-12">
                <div class="full">
                  <div id="testimonial_slider" class="carousel slide" data-ride="carousel">
                     <div class="carousel-inner">
                        <div class="carousel-item active">
                           <div class="testomonial_section">
                              <div class="full center">
                                <div class="client_img">
                                  <img src="/images/Basar.jpeg" height="280" width="200" alt="Bild von Basar Nezir, einer der Besitzer" />
                                </div>
                              </div>
                              <div class="full testimonial_cont text_align_center">
                                <p><strong>Nezir Basar</strong><br><strong class="orange_color">Student</strong><br><br><i>Mein Name ist Nezir Basar und ich bin 22 Jahre alt. Schon immer habe ich das Rauchen von Wasserpfeifen geliebt, jedoch ist durch Corona und den neuen Gesetzeslagen, nicht mehr möglich ganz einfach in eine Shisha Bar zu gehen. Deswegen haben wir es uns zur Aufgabe gemacht die Bar zu euch Nachhause zu bringen, damit Ihr noch gemütlich eure Pfeife rauchen könnts.</i></p>
                              </div>
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
      <section id="contact" class="dark_bg_blue layout_padding cross_layout padding_top_0 margin_top_0">
        <div class="container">
           <div class="row">
             <div class="col-md-12">
               <div class="full center">
                 <h2 class="heading_main orange_heading">Kontaktieren</h2>
               </div>
             </div>
           </div>
           <div class="row">
              <div class="col-md-6">
                 <div class="full">
                    <div class="contact_form">
                        <form>
                          <fieldset class="row">
                            <div class="col-md-12">
                            <div class="full field">
                              <input type="text" placeholder="Name" name="name" />
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="full field">
                              <input type="email" placeholder="Email" name="email" />
                            </div>
                          </div>
                            <div class="col-md-12">
                            <div class="full field">
                              <input type="text" placeholder="Nummer" name="number" />
                            </div>
                          </div>
                            <div class="col-md-12">
                            <div class="full field">
                              <textarea placeholder="Nachricht"></textarea>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="full center">
                              <button class="submit_bt">Senden</button>
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

      <!-- footer -->
      <footer>
         <div class="container">
           <div class="row">
              <div class="col-md-6">
                <div class="full">
                  <div class="logo"> <a href="#home"><img src="/images/Logo_Shisha_at_Home.png" height="80" width="180" alt="Logo vom Unternehmen"></a> </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="full">
                   <ul class="social_links">
                      <li><a href="https://www.facebook.com/"><i class="fa fa-facebook-f"></i></a></li>
                      <li><a href="https://twitter.com/?lang=de"><i class="fa fa-twitter"></i></a></li>
                      <li><a href="https://www.instagram.com/"><i class="fa fa-instagram"></i></a></li>
                   </ul>
                </div>
              </div>
              <div class="col-md-4">
                 <div class="full">
                    <h4 class="widget_heading">SUBSCRIBE</h4>
                 </div>
                 <div class="full subribe_form">
                    <form>
                      <fieldset>
                         <div class="field">
                           <input type="email" name="mail" placeholder="E-mail" />
                         </div>
                         <div class="field">
                           <button class="submit_bt">Bestätigen</button>
                         </div>
                      </fieldset>
                    </form>
                 </div>
              </div>
              <div class="col-md-4">
                 <div class="full">
                   <h4 class="widget_heading">Links</h4>
                 </div>
                 <div class="full f_menu">
                    <ul>
                       <li><a href="#home">Home</a></li>
                       <li><router-link to="/Transaction/Offer/products" href="#">Angebot</router-link></li>
                       <li><router-link to="/Transaction/tutorial" href="#">Ablauf</router-link></li>
                       <li><a href="#testimonial">Wer sind wir</a></li>
                    </ul>
                 </div>
              </div>
              <div class="col-md-4">
                 <div class="full">
                   <h4 class="widget_heading">Kontakt Daten</h4>
                   <div class="full cont_footer">
                     <p><strong>Shisha@Home</strong><br><br>Oswald-Redlich-Straße 36, Wien<br>Tel.: +43676-911-607-3<br>Nezirbasar@outlook.com</p>
                   </div>
                 </div>
              </div>
           </div>
         </div>
      </footer>
      <!-- end footer -->

      <!-- copyright -->

      <div class="cpy_right">
          <div class="container">
              <div class="row">
                  <div class="col-md-12">
                     <div class="full">
                        <p>© 2020 All Rights Reserved. Design by <a href="#">Nezir Basar</a></p>
                     </div>
                  </div>
              </div>
          </div>
      </div>

      <!-- right copyright -->

   </div>
</div>
   </body>
</template>

<script>
import Navbar from "~/components/mainNavbar.vue";
export default {
   data() {
      return {
         sidebarOpen: false,
      }
   },
   components: {
      "navbar": Navbar
   },
   methods: {
      showSidebar() {
         this.sidebarOpen = !this.sidebarOpen
      }
   },
  created() {
    if (this.$store.state.login == false) {
      this.$store.commit("changeLogToTrue");
      this.$router.go(0);
    }
  },
  mounted() {
    this.$store.commit("changeLogToFalse");
  },
}
</script>

<style scoped>

</style>
