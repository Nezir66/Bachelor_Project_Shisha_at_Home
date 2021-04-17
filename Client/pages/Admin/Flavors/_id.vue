<template>
  <div class="container">
    <div class="header"></div>
    <div class="col col-10">
      <div class="new-Flavor">
        <h1>{{ singleFlavor.flavor }}</h1>
        <br />
        <hr />
        <div style="margin-top: 20px">
          <label for="flavor">
            <input
              type="text"
              id="flavor"
              class="input-flavor"
              v-model="flavor"
              :placeholder="singleFlavor.flavor"
            />
          </label>
          <br />
          <label for="description">
            <textarea
              type="text"
              id="description"
              class="input-flavor"
              v-model="description"
              :placeholder="singleFlavor.description"
            ></textarea>
          </label>
          <br />
          <label for="price">
            <input
              type="number"
              id="price"
              class="input-flavor"
              v-model="price"
              :placeholder="singleFlavor.price"
            />
          </label>
        </div>
        <br />
        <button class="btn btn-block" id="add-flavor" @click="addNewFlavor()">
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
    let singleFlavor = await $axios.$get(
      `http://localhost:3000/Shisha@home/flavor/${params.id}`
    ); // get the data of Object with id ${params.id} and save it to singleFlavor

    return {
      singleFlavor: singleFlavor.flavor, //save the Object singleFlavor.flavor to singleFlavor in order to use it
    };
  },
  data() {
    return {
      flavor: "",
      description: "",
      price: "",
      selectedFlavorPicture: null,
      pictureName: "",
    };
  },

  methods: {
    async addNewFlavor() {
      let data = {
        flavor: this.flavor,
        description: this.description,
        price: this.price,
      };
      let results = await this.$axios.$put(
        `http://localhost:3000/Shisha@home/flavor/${this.$route.params.id}`,
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
.new-Flavor {
  width: 100%;
  height: 500px;
  text-align: center;
  border: 2px solid black;
  border-radius: 10px;
  margin: center;
  background-color: gray;
}
.input-flavor {
  width: 500px;
  height: 30px;
  margin: center;
  margin-bottom: 10px;
}
.picture-flavor {
  margin-top: 40px;
}
#add-flavor {
  background-color: antiquewhite;
  border: 2px solid black;
  border-radius: 10px;
}
.img-single-flavor {
  margin: center;
  width: 150px;
  height: 150px;
}
</style>