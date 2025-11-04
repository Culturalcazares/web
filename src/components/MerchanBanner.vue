<script setup lang="ts">
</script>

<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-6 text-center align-content-center">
        <h2 class="fs-1">Compra nuestra camiseta</h2>
      </div>
      <div class="col-md-3">
        <RouterLink :to="{ name: 'merchandising' }">
          <img class="img-fluid" src="/images/camiseta.png" alt="Camiseta" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
