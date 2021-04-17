<template>
  <div>
    <div class="container">
      <div class="header"></div>
      <div class="col col-10">
        <div class="new-Flavor">
          <br />
          <hr />
          <div style="margin-top: 60px">
            <label for="drink">
              <input
                type="text"
                id="drink"
                class="input-flavor"
                placeholder="Getränk"
                v-model="drink"
              />
            </label>
            <br />
            <label for="description">
              <textarea
                type="text"
                id="description"
                class="input-flavor"
                placeholder="Beschreibung"
                v-model="description"
              ></textarea>
            </label>
            <br />
            <label for="price">
              <input
                type="number"
                id="price"
                class="input-flavor"
                placeholder="Preis"
                v-model="price"
              />
            </label>
          </div>
          <br />
          <button class="btn btn-block" id="add-flavor" @click="addNewDrink()">
            Hinzufügen
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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

      let results = await this.$axios.$post(
        "http://localhost:3000/Shisha@home/drink",
        data
      );

      this.$router.push("/Admin/addNewProducts");
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
  margin-top: 200px;
}
#add-flavor {
  background-color: antiquewhite;
  border: 2px solid black;
}
</style>