<script setup lang="ts">
</script>

<template>
  <div class="container py-5">
    <RouterLink :to="{ name: 'merchandising' }">
      <div class="row">
        <div class="col-md-3">
            <img class="img-fluid" src="@/assets/images/camiseta.png" alt="Camiseta" />
        </div>
        <div class="col-md-6 text-center align-content-center">
          <p class="fs-1">Tenemos merchandising!!</p>
        </div>
        <div class="col-md-3">
            <img class="img-fluid" src="@/assets/images/camiseta.png" alt="Camiseta" />

        </div>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
</style>
