<template>
  <div>
    <div class="row">
      <div class="col-lg-3 profil-data">
        <p><strong>Benutzername:</strong></p>
      </div>
      <div class="col-lg-3 user-data">
        <p><slot name="userName"></slot></p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 profil-data">
        <p><strong>E-mail:</strong></p>
      </div>
      <div class="col-lg-3 user-data">
        <p><slot name="email"></slot></p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 profil-data">
        <p><strong>Vorname:</strong></p>
      </div>
      <div class="col-lg-3 user-data">
        <p><slot name="firstName"></slot></p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 profil-data">
        <p><strong>Nachname:</strong></p>
      </div>
      <div class="col-lg-3 user-data">
        <p><slot name="lastName"></slot></p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 profil-data">
        <p><strong>Addresse:</strong></p>
      </div>
      <div class="col-lg-5 user-data">
        <p><slot name="address"></slot></p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 profil-data">
        <p><strong>PLZ:</strong></p>
      </div>
      <div class="col-lg-3 user-data">
        <p><slot name="plz"></slot></p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 profil-data">
        <p><strong>Ort:</strong></p>
      </div>
      <div class="col-lg-3 user-data">
        <p><slot name="city"></slot></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scopped>
p {
  color: white;
}

p strong {
  color: white;
}
@media (min-width: 768px) and (max-width: 991px){
  .profil-data {
    width: 32%;
    display: inline-block;
  }

  .user-data {
    display: inline-block;
    width: 68%;
  }

  p {
    color: white;
    font-size: 15px;
  }

  p strong {
    color: white;
    font-size: 15px;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .profil-data {
    width: 32%;
    display: inline-block;
  }

  .user-data {
    display: inline-block;
    width: 68%;
  }

  p {
    color: white;
    font-size: 15px;
  }

  p strong {
    color: white;
    font-size: 15px;
  }
}
@media (max-width: 575px) {
  .profil-data {
    width: 32%;
    display: inline-block;
  }

  .user-data {
    display: inline-block;
    width: 68%;
  }

  p {
    color: white;
    font-size: 15px;
  }

  p strong {
    color: white;
    font-size: 15px;
  }
}
</style>