<template>
  <div>
    <div class="container">
      <div class="header"></div>
      <div class="row">
        <div class="col-xl-1"></div>
        <div class="col col-xl-10">
          <div class="new-Flavor">
            <br />
            <hr />
            <div style="margin-top: 60px">
              <label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Geschmack"
                  v-model="flavor"
                />
              </label>
              <br />
              <label for="description">
                <textarea
                  type="text"
                  class="form-control"
                  placeholder="Beschreibung"
                  v-model="description"
                ></textarea>
              </label>
              <br />
              <label for="price">
                <input
                  id="price"
                  type="number"
                  class="form-control"
                  placeholder="Preis"
                  v-model="price"
                />
              </label>
            </div>
            <br />
            <button
              class="btn btn-block"
              id="add-flavor"
              @click="addNewFlavor()"
            >
              Hinzufügen
            </button>
          </div>
        </div>
        <div class="col-xl-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flavor: "",
      description: "",
      price: "",
      icon: null,
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
        photo: this.icon
      };

      let results = await this.$axios.$post(
        "http://localhost:3000/Shisha@home/flavor",
        data
      );
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.header {
  width: 100%;
}
.new-Flavor {
  width: 100%;
  height: 500px;
  text-align: center;
  border: 2px solid black;
  border-radius: 10px;
  margin: center;
  background-color: rgba(15, 40, 50, 0.3);
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
  border-radius: 10px;
}
</style>