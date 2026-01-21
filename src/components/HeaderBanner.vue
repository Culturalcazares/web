<script setup lang="ts"></script>

<template>
  <div id="banner">
    <div class="row m-0">
      <div
        id="date-and-place-container"
        class="col-md-6 ms-auto order-2 order-md-1 align-content-center text-center text-md-start ps-md-5"
      >
        <h1 class="text-white main-text text-center">Parque de los Alcázares</h1>
        <h2 class="text-white secondary-text text-center">Sta. María de Benquerencia</h2>
        <h3 class="date-text text-center">24 de Octubre 2026</h3>
      </div>
      <div id="image-container" class="col-md-6 order-1 order-md-2">
        <img class="img-main" src="@/assets/images/lata.png" alt="Lata" />
      </div>
    </div>
  </div>
</template>

<style scoped>
#banner {
  height: calc(100vh - 66px);
  background-color: rgb(92, 124, 182);
  font-family: var(--jellee), sans-serif;
}

.main-text {
  font-weight: bold;
  font-size: 3.5rem;
  margin-bottom: 0;
}

.secondary-text {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.date-text {
  color: rgb(238, 200, 45);
  font-size: 2.2rem;
  font-weight: bold;
}

@media (max-width: 768px) {
  #banner {
    height: auto;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .main-text {
    font-size: 2.5rem;
  }
  .secondary-text {
    font-size: 1.3rem;
  }
  .date-text {
    font-size: 1.8rem;
  }
  .img-main {
    width: 100%;
    height: auto !important;
    margin: auto;
  }
}
.img-main {
  height: calc(100vh - 66px);
  object-fit: contain;
  display: block;
  margin-right: auto;
}
</style>
