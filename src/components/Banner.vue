<script setup lang="ts"></script>

<template>
  <div id="banner">
    <div class="row m-0">
      <div
        id="date-and-place-container"
        class="col-md-6 ms-auto order-2 order-md-1 align-content-center"
      >
        <img class="img-fluid" src="/images/fecha-y-lugar.png" alt="Text" />
      </div>
      <div id="image-container" class="col-md-6 order-1 order-md-2">
        <img class="img-main" src="/images/lata.png" alt="Lata" />
      </div>
    </div>
  </div>
</template>

<style scoped>
#banner {
  height: calc(100vh - 66px);
  background-color: rgb(92, 124, 182);
}

@media (max-width: 768px) {
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
