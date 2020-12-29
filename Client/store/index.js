export const state = () => ({
    autLogOut: true,
    cart: [],
    cartLength: 0,
    totalPrice: 0,
    totalProduct: 0,
    login: false,
  });
  
  export const actions = {
    addProductToCart({ state, commit }, product) {
      //in order to use the keys in the state and the functions in the mutation we have to bind "state" and "commit" to the function and also we give as a parameter the prooduct itself
      const cartProduct = state.cart.find(prod => prod._id === product._id); // We are checking if the product with the wanted id exist or not, if so then cartProduct is true
  
      if (!cartProduct) {
        //if the product does not exist then go in this statement
        commit("pushProductToCart", product); //we make a commit to the mutations object to push the product to the cart array in the state
      } else {
        commit("incrementProductQty", cartProduct); //we make a commit to the the mutations object to increment the quantity of the product
      }
  
      commit("incrementCartLength"); //increment the length of the "cartLength" by 1
    }
  };
  
  export const mutations = {
    pushProductToCart(state, product) {
      product.quantity = 1;
      state.totalProduct++;
      state.totalPrice += product.price;
      state.cart.push(product);
    },
    incrementProductQty(state, product) {
      product.quantity++;
      state.totalProduct++;
      state.totalPrice += product.price;
      let indexOfProduct = state.cart.indexOf(product);
      state.cart.splice(indexOfProduct, 1, product);
    },
    incrementCartLength(state) {
      state.cartLength = 0;
      if (state.cart.length > 0) {
        state.cart.map(product => {
          state.cartLength += product.quantity;
        });
      }
    },
    deleteProduct(state, product) {
      state.totalProduct -= product.quantity;
      state.totalPrice -= product.price * product.quantity;
      let indexOfProduct = state.cart.indexOf(product);
      state.cart.splice(indexOfProduct, 1);
    },
    clearCart(state) {
      state.cart = [];
      state.cartLength = 0;
      state.totalPrice = 0;
      state.totalProduct = 0;
    },
    changeLogToFalse(state) {
      state.login = false;
    },
    changeLogToTrue(state) {
      state.login = true;
    },
  };
  
  export const getters = {
    getCartLength(state) {
      return state.cartLength;
    }
  };
  