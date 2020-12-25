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
            /></a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="distance">
            <ul class="social_links">
              <li>
                <a href="https://www.facebook.com/"
                  ><i class="fa fa-facebook-f"></i
                ></a>
              </li>
              <li>
                <a href="https://twitter.com/?lang=de"
                  ><i class="fa fa-twitter"></i
                ></a>
              </li>
              <li>
                <a href="https://www.instagram.com/"
                  ><i class="fa fa-instagram"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-4">
          <div class="distance">
            <h4 class="widget_heading">SUBSCRIBE</h4>
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
            <h4 class="widget_heading">Links</h4>
          </div>
          <div class="distance f_menu">
            <ul>
              <li><a href="#home">Home</a></li>
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
              <li><a href="#testimonial">About</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-4">
          <div class="distance">
            <h4 class="widget_heading">Kontakt Daten</h4>
            <div class="distance cont_footer">
              <p>
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