<template>
  <div class="container-fluid">
    <div class="row" style="height: 800px">
      <div class="col-lg-2 col-sm-2 col-md-2 col-xs-1"></div>
      <div class="col-lg-8 col-sm-8 col-md-6 col-xs-5">
        <label for="firstName" alt="Vorname" class="col-lg-5">
          Vorname:
          <input
            id="firstName"
            type="text"
            class="form-control"
            v-model="firstName"
            placeholder="Vorname"
          />
        </label>
        <label for="lastName" alt="Nachname" class="col-lg-5">
          Nachname:
          <input
            id="lastName"
            type="text"
            class="form-control"
            v-model="lastName"
            placeholder="Nachname"
          />
        </label>
        <hr />
        <label for="address" alt="Addresse" class="col-lg-5">
          Addresse:
          <input
            id="address"
            type="text"
            class="form-control"
            v-model="address"
            placeholder="Addresse"
          />
        </label>
        <hr />
        <label for="plz" alt="Postleitzahl" class="col-lg-5">
          PLZ:
          <input
            id="plz"
            type="text"
            class="form-control"
            v-model="plz"
            placeholder="PLZ"
          />
        </label>
        <hr />
        <label for="city" alt="Ort" class="col-lg-5">
          Ort:
          <input
            id="city"
            type="text"
            class="form-control"
            v-model="city"
            placeholder="Ort"
          />
        </label>
        <hr />
        <button class="btn btn-primary" @click="addAddress()">
          Addresse Einfügen
        </button>
      </div>
      <div class="col-lg-2 col-sm-2 col-md-2 col-xs-1"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      address: "",
      plz: "",
      city: "",
    };
  },
  methods: {
    async addAddress() {
      try {
        let data = {
          firstName: this.firstName,
          lastName: this.lastName,
          address: this.address,
          plz: this.plz,
          city: this.city,
        };

        let response = await this.$axios.$post(
          "http://localhost:3000/Shisha@home/address",
          data
        ); // make a post request to "Shisha@home/address"
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>