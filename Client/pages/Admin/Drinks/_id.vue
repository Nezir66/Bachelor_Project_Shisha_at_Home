<template>
  <div class="container">
    <div class="header"></div>
    <div class="col col-10">
      <div class="new-Drink">
        <h1>{{ singleDrink.drink }}</h1>
        <br />
        <hr />
        <div style="margin-top: 20px">
          <label for="drink">
            <input
              type="text"
              id="drink"
              class="input-Drink"
              v-model="drink"
              :placeholder="singleDrink.drink"
            />
          </label>
          <br />
          <label for="description">
            <textarea
              type="text"
              id="description"
              class="input-Drink"
              v-model="description"
              :placeholder="singleDrink.description"
            ></textarea>
          </label>
          <br />
          <label for="price">
            <input
              type="number"
              id="price"
              class="input-Drink"
              v-model="price"
              :placeholder="singleDrink.price"
            />
          </label>
        </div>
        <br />
        <button class="btn btn-block" id="add-Drink" @click="addNewDrink()">
          Hinzufügen
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    //We bind axios and params to the code in order to use it
    let singleDrink = await $axios.$get(
      `http://localhost:3000/Shisha@home/drink/${params.id}`
    ); // get the data of Object with id ${params.id} and sve to singleFlavor

    return {
      singleDrink: singleDrink.drink, //save the Object singleFlavor.flavor to singleFlavor in order to use it
    };
  },
  data() {
    return {
      drink: "",
      description: "",
      price: "",
    };
  },

  methods: {
    async addNewDrink() {
      let data = {
        drink: this.drink,
        description: this.description,
        price: this.price,
      };

      let results = await this.$axios.$put(
        `http://localhost:3000/Shisha@home/drink/${this.$route.params.id}`,
        data
      ); // Send the data to the server and replace the old Content in ${ this.$route.params.id } with the new Content in "data"

      this.$router.push("/"); // After finishing the function go to the first page
    },
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 100px;
}
.new-Drink {
  width: 100%;
  height: 500px;
  text-align: center;
  border: 2px solid black;
  margin: center;
  background-color: gray;
}
.input-Drink {
  width: 500px;
  height: 30px;
  margin: center;
  margin-bottom: 10px;
}
.picture-Drink {
  margin-top: 40px;
}
#add-Drink {
  background-color: antiquewhite;
  border: 2px solid black;
}
.img-single-Drink {
  margin: center;
  width: 150px;
  height: 150px;
}
</style>