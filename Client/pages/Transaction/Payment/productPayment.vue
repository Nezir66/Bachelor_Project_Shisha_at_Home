<template>
  <navbar>
    <div class="container-fluid">
      <div class="row" style="height: 500px; padding: 0">
        <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12 font-color">
          <div class="payment">
            <h1 class="center" style="color: white" tabindex="0">
              Zahlungsart
            </h1>
            <hr />
            <p tabindex="0">Gesamtsumme: {{ $store.state.totalPrice }}€</p>
            <img
              src="/images/visa.png"
              width="102"
              height="73"
              alt="Bezahlen mit Visa"
              @click="changeToVisa"
              @keyup.enter="changeToVisa"
              tabindex="0"
            />
            <div ref="card" v-show="visa == true"></div>
            <button
              class="btn btn-primary"
              style="float: right; margin-top: 30px"
              @click="onClickCardPay"
              v-show="visa == true"
            >
              Bezahlen
            </button>

            <img
              @click="onClickSofortPay"
              @keyup.enter="onClickSofortPay"
              style="cursor: pointer"
              src="/images/klarna-sofort.png"
              alt="Bezahlen mit Sofort Pay"
              tabindex="0"
            />

            <img
              @click="onClickCashPay"
              @keyup.enter="onClickCashPay"
              style="cursor: pointer"
              width="102"
              height="73"
              src="/images/barzahlen.png"
              alt="Bezahlen mit Barzahlung"
              tabindex="0"
            />
          </div>
        </div>
      </div>
    </div>
  </navbar>
</template>

<script>
import Navbar from "~/components/mainNavbar.vue";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      error: "",
      stripe: null,
      card: null,
      name: "",
      email: "",
      visa: false,
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
    navbar: Navbar,
  },
  methods: {
    ...mapMutations(["pushPayment"]),
    async onClickCardPay() {
      try {
        let token = await this.stripe.createToken(this.card); // we create a token with the credit card number
        let response = await this.$axios.$post(
          "http://localhost:3000/Shisha@home/paymentCard",
          {
            token: token,
            totalPrice: this.$store.state.totalPrice,
            cart: this.$store.state.cart,
            payment: "Visa",
          }
        );

        if (response.success) {
          this.$store.commit("clearCart"); //clear the cart array in vuex store
          this.$router.push("/Transaction/Payment/finishedPayment");
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
            cart: this.$store.state.cart,
            payment: "Sofort",
          }
        );
        if (response.success) {
          this.$store.commit("clearCart"); //clear the cart array in vuex store
          await this.stripe.confirmSofortPayment(
            //with this we will be redirect to the sofort payment page
            response.paymentIntent.client_secret, // the client secret key from the response of the server
            {
              payment_method: {
                sofort: {
                  country: "AT",
                },
              },
              return_url:
                "http://localhost:9000/Transaction/Payment/finishedPayment", // this redirects the user after the payment succesfully completed to the wanted page
            }
          );
        }
      } catch (err) {
        console.log(err);
      }
    },
    async onClickCashPay() {
      try {
        let response = await this.$axios.$post(
          "http://localhost:3000/Shisha@home/paymentCash",
          {
            cart: this.$store.state.cart,
            payment: "Barzahlung",
          }
        );
        if (response.success) {
          this.$store.commit("clearCart"); //clear the cart array in vuex store
          this.$router.push("/Transaction/Payment/finishedPayment");
        }
      } catch (err) {
        console.log(err);
      }
    },
    changeToVisa() {
      this.visa = !this.visa;
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

.font-color {
  color: white;
  margin-left: auto;
  margin-right: auto;
}

p {
  color: white;
}

img:focus {
  border: 2px solid black;
}
</style>