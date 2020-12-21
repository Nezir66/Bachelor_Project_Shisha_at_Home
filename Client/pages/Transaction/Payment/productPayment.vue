<template>
  <navbar>
    <div class="container-fluid">
      <div class="row" style="height: 770px; padding: 0">
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8">
          <h1>Zahlungsart</h1>
          <hr />
          <p>Gesamtsumme: {{ $store.state.totalPrice }}€</p>
          <div ref="card"></div>
          <br />
          <button
            class="btn btn-primary"
            style="float: right"
            @click="onClickCardPay"
          >
            Bezahlen
          </button>
          <br /><br />
          <hr />
          <img
            @click="onClickSofortPay()"
            style="transform: scale(1); cursor: pointer"
            src="/images/klarna-sofort.png"
            alt="Sofort pay"
          />
          <button @click="test()">test</button>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
      </div>
    </div>
  </navbar>
</template>

<script>
import Navbar from "~/components/mainNavbar.vue";
import {mapMutations} from 'vuex'
export default {
  data() {
    return {
      error: "",
      stripe: null,
      card: null,
      name: "",
      email: "",
    };
  },
  mounted() {
    this.stripe = Stripe(
      "pk_test_51HtyyOALoCU1R1K69QmWwGHaGitPDn6uSqCJSWavVNAJxiheofdW3rArscyAPawlFJZhfQ5Wa7BhmN726cGHdap300jMeklNbA"
    ); //The Stripe method will check if the Api key is valid if true the it will save all the elements from stripe to the variable stripe
    let elements = this.stripe.elements();
    this.card = elements.create("card"); //this will create a new input element for the card number
    this.card.mount(this.$refs.card); //mount the input file to the ref with the name "card"
  },
  components: {
    "navbar": Navbar,
  },
  methods: {
    ...
    NavbarmapMutations(["pushPayment"]),

    test(){
        console.log(this.$store.state.response);
    },
    async onClickCardPay() {
      try {
        let token = await this.stripe.createToken(this.card); // we create a token with the credit card number
        let response = await this.$axios.$post(
          "http://localhost:3000/Shisha@home/paymentCard",
          {
            token: token,
            totalPrice: this.$store.state.totalPrice,
            cart: this.$store.state.cart,
          }
        );

        if (response.success) {
          this.$store.commit("clearCart"); //clear the cart array in vuex store
          this.$router.push("/");
        }
      } catch (err) {
        console.log(err);
      }
    },
    async onClickSofortPay() {
      try {
        let response = await this.$axios.$post(
          "http://localhost:3000/Shisha@home/paymentSofort",
          {
            totalPrice: this.$store.state.totalPrice, //sends the total amount of price from the user to the server
          }
        );
        if (response.success) {
          this.$store.commit("clearCart"); //clear the cart array in vuex store
          await this.stripe
            .confirmSofortPayment(
              //with this we will be redirect to the sofort payment page
              response.paymentIntent.client_secret, // the client secret key from the response of the server
              {
                payment_method: {
                  sofort: {
                    country: "AT",
                  },
                },
                return_url: "http://localhost:9000/", // this redirects the user after the payment succesfully completed to the wanted page
              }
            )
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
.StripeElement {
  box-sizing: border-box;

  height: 40px;
  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}
</style>