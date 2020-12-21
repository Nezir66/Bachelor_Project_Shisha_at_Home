<template>
  <div>
    <div class="row">
      <div class="col-lg-3">
        <h4><strong>Benutzername:</strong></h4>
      </div>
      <div class="col-lg-3">
        <h4><slot name="userName"></slot></h4>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3">
        <h4><strong>E-mail:</strong></h4>
      </div>
      <div class="col-lg-3">
        <h4><slot name="email"></slot></h4>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3">
        <h4><strong>Vorname:</strong></h4>
      </div>
      <div class="col-lg-3">
        <h4><slot name="firstName"></slot></h4>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3">
        <h4><strong>Nachname:</strong></h4>
      </div>
      <div class="col-lg-3">
        <h4><slot name="lastName"></slot></h4>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3">
        <h4><strong>Addresse:</strong></h4>
      </div>
      <div class="col-lg-5">
        <h4><slot name="address"></slot></h4>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3">
        <h4><strong>PLZ:</strong></h4>
      </div>
      <div class="col-lg-3">
        <h4><slot name="plz"></slot></h4>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3">
        <h4><strong>Ort:</strong></h4>
      </div>
      <div class="col-lg-3">
        <h4><slot name="city"></slot></h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>