<script setup lang="ts">
import { useSponsorStore } from '@/stores/sponsor.ts'

const store = useSponsorStore()

</script>

<template>
  <div id="sponsors" class="container my-5">
    <h2 class="fs-1 mb-3">Patrocinadores</h2>
    <div v-if="store.sponsors && store.sponsors.length > 0">
      <div class="row">
        <div class="col" v-for="sponsor in store.sponsors" :key="sponsor.id">
          <a :href="sponsor.link" target="_blank">
            <img class="img-fluid" src="/images/logo.png" alt="Patrocinador" />
          </a>
        </div>
      </div>
    </div>
    <div class="row-cols-1 text-center mt-5">
      <h3>¿Te gustaría ayudar o patrocinar al Culturalcázares?</h3>
      <p class="mt-3">
        <RouterLink :to="{ name: 'sponsors' }" class="btn btn-primary">¡Pues claro que sí!</RouterLink>
      </p>
    </div>
  </div>
</template>

<style scoped></style>
