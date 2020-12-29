<template>
  <navbar>
    <div class="shopping-cart">
      <h1>Shopping Cart</h1>
      <div class="column-labels">
        <label class="product-details">Product</label>
        <label class="product-price">Preis</label>
        <label class="product-quantity">Menge</label>
        <label class="product-removal">Löschen</label>
        <label class="product-line-price">Total</label>
      </div>

      <div
        class="product"
        v-for="product in $store.state.cart"
        :key="product._id"
      >
        <div class="product-details">
          <div class="product-title">{{ product.flavor }}</div>
          <div class="product-title">{{ product.hookah }}</div>
          <div class="product-title">{{ product.coal }}</div>
          <div class="product-title">{{ product.drink }}</div>
          <div class="product-description">{{ product.description }}</div>
        </div>
        <div class="product-price">{{ product.price }}</div>
        <div class="product-quantity">
          {{ product.quantity }}
        </div>
        <div class="product-removal">
          <a
            href="#"
            class="remove-product"
            @click="$store.commit('deleteProduct', product)"
            >Enfernen</a
          >
        </div>
        <div class="product-line-price">
          {{ product.price * product.quantity }}
        </div>
      </div>

      <div class="totals" v-if="$store.state.cart.length <= 0">
        <div class="totals-item">
          <label>Gesamtsumme</label>
          <div class="totals-value" id="cart-subtotal">0</div>
        </div>
      </div>

      <div class="totals" v-else>
        <div class="totals-item">
          <label>Gesamtsumme</label>
          <div class="totals-value" id="cart-subtotal">
            {{ $store.state.totalPrice }}
          </div>
        </div>
        <div class="totals-item">
          <label>Artikel</label>
          <div class="totals-value-product" id="cart-tax">
            {{ $store.state.totalProduct }}
          </div>
        </div>
      </div>
      <router-link to="/Transaction/Payment/dataCheckUser">
        <button class="checkout">Bezahlen</button>
      </router-link>
      <button class="checkout" @click="$store.commit('clearCart')">
        Alle Produkte entfernen
      </button>
    </div>
    <!--
          <div
            class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bodyOfCart background"
          >
            <input
              type="text"
              class="form-control"
              placeholder="Rabattcode hier eingeben"
            />
            <br />
            <button class="btn btn-primary btn-block" style="margin-top: 10px">
              Anwenden
            </button>
          </div>
        </div>
      </div>-->
  </navbar>
</template>

<script>
import Navbar from "~/components/mainNavbar.vue";
export default {
  components: {
    navbar: Navbar,
  },
  methods: {
    goToPayment() {
      this.$router.push("/Payment/dataCheckUser");
    },
  },
};
</script>
<style scoped>
.product-details {
  float: left;
  width: 57%;
}

.product-price {
  float: left;
  width: 12%;
}

.product-quantity {
  float: left;
  width: 10%;
}

.product-removal {
  float: left;
  width: 9%;
}

.product-line-price {
  float: left;
  width: 12%;
  text-align: right;
}

/* This is used as the traditional .clearfix class */
.group:before,
.shopping-cart:before,
.column-labels:before,
.product:before,
.totals-item:before,
.group:after,
.shopping-cart:after,
.column-labels:after,
.product:after,
.totals-item:after {
  content: "";
  display: table;
}

.group:after,
.shopping-cart:after,
.column-labels:after,
.product:after,
.totals-item:after {
  clear: both;
}

.group,
.shopping-cart,
.column-labels,
.product,
.totals-item {
  zoom: 1;
}

/* Apply clearfix in a few places */
/* Apply dollar signs */
.product .product-price:before,
.product .product-line-price:before,
.totals-value:before {
  content: "€ ";
}

label {
  color: white;
}

.shopping-cart {
  background-color: #82260e;
  color: white;
  padding: 5%;
  box-shadow: 0 0 5px 5px white;
}

/* Column headers */
.column-labels label {
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid #eee;
}
.column-labels .product-image,
.column-labels .product-details,
.column-labels .product-removal {
  text-indent: -9999px;
}

/* Product entries */
.product {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}
.product .product-image {
  text-align: center;
}
.product .product-image img {
  width: 100px;
}
.product .product-details .product-title {
  margin-right: 20px;
}
.product .product-details .product-description {
  color: white;
  margin: 5px 20px 5px 0;
  line-height: 1.4em;
}
.product .product-quantity input {
  width: 40px;
}
.product .remove-product {
  border: 0;
  padding: 4px 8px;
  background-color: white;
  color: #82260e;
  font-size: 12px;
  border-radius: 3px;
}
.product .remove-product:hover {
  background-color: #295406;
  color: white;
}

/* Totals section */
.totals .totals-item {
  float: right;
  clear: both;
  width: 100%;
  margin-bottom: 10px;
}
.totals .totals-item label {
  float: left;
  clear: both;
  width: 79%;
  text-align: right;
}

.totals-value-product {
  float: right;
  width: 21%;
  text-align: right;
}

.totals .totals-item .totals-value {
  float: right;
  width: 21%;
  text-align: right;
}
.checkout {
  float: right;
  border: 0;
  margin-top: 20px;
  margin-left: 15px;
  padding: 6px 25px;
  background-color: white;
  color: #82260e;
  border-radius: 3px;
}

.checkout:hover {
  background-color: #295406;
  color: white;
}

@media screen and (max-width: 650px) {
  .shopping-cart {
    margin: 0;
    padding-top: 20px;
    border-top: 1px solid #eee;
    margin: 5%;
  }

  .column-labels {
    display: none;
  }

  .product-image {
    float: right;
    width: auto;
  }
  .product-image img {
    margin: 0 0 10px 10px;
  }

  .product-details {
    float: none;
    margin-bottom: 10px;
    width: auto;
  }

  .product-price {
    clear: both;
    width: 70px;
  }

  .product-quantity {
    width: 100px;
  }
  .product-quantity input {
    margin-left: 20px;
  }

  .product-quantity:before {
    content: "x";
  }

  .product-removal {
    width: auto;
  }

  .product-line-price {
    float: right;
    width: 70px;
  }
}

@media screen and (max-width: 350px) {
  .product-removal {
    float: right;
  }

  .product-line-price {
    float: right;
    clear: left;
    width: auto;
    margin-top: 10px;
  }

  .product .product-line-price:before {
    content: "Item Total: $";
  }

  .totals .totals-item label {
    width: 60%;
  }
  .totals .totals-item .totals-value {
    width: 40%;
  }
}
</style>