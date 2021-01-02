<template>
  <!-- footer -->
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="logo">
            <a href="#home"
              ><img
                src="/images/Logo_Shisha_at_Home.png"
                height="80"
                width="180"
                alt="Logo vom Unternehmen"
                tabindex="1"
            /></a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="distance">
            <ul class="social_links">
              <li>
                <a
                  href="https://www.facebook.com/"
                  aria-label="Zur Facebook Seite von Shisha @ Home"
                  ><i class="fa fa-facebook-f"></i
                ></a>
              </li>
              <li>
                <a
                  href="https://twitter.com/?lang=de"
                  aria-label="Zur Twitter Seite von Shisha @ Home"
                  ><i class="fa fa-twitter"></i
                ></a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  aria-label="Zur Instagram Seite von Shisha @ Home"
                  ><i class="fa fa-instagram"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-4">
          <div class="distance">
            <h3
              class="widget_heading"
              tabindex="0"
              aria-label="Für den Newsletter anmelden"
            >
              Anmelden
            </h3>
          </div>
          <div class="distance subribe_form">
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
          <div class="distance">
            <h3 class="widget_heading" tabindex="0" aria-label="Wichtige Links">
              Links
            </h3>
          </div>
          <div class="distance f_menu">
            <ul>
              <li><a href="#home" aria-label="Nach oben gelangen">Home</a></li>
              <li>
                <router-link to="/Transaction/Offer/products" href="#"
                  >Impressum</router-link
                >
              </li>
              <li>
                <router-link to="/Transaction/tutorial" href="#"
                  >AGB</router-link
                >
              </li>
              <li><a href="#testimonial">Über uns</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-4">
          <div class="distance">
            <h3 class="widget_heading" tabindex="0">Kontakt Daten</h3>
            <div class="distance cont_footer">
              <p tabindex="0">
                <strong>Shisha@Home</strong><br /><br />Oswald-Redlich-Straße
                36, Wien<br />Tel.: +43676-911-607-3<br />Nezirbasar@outlook.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scopped>
.distance {
  width: 100%;
  float: left;
  margin: 0;
  padding: 0;
}
</style>