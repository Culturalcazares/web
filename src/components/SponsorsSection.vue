<script setup lang="ts">
import { useSponsorStore } from '@/stores/sponsor.ts'

const store = useSponsorStore()

</script>

<template>
  <div id="sponsors" class="container my-5">
    <h2 class="fs-1 mb-3">Patrocina</h2>
    <div v-if="store.sponsors && store.sponsors.length > 0">
      <div class="row">
        <div
          class="col-6 col-md-4 d-flex align-items-center justify-content-center p-3"
          v-for="sponsor in store.sponsors"
          :key="sponsor.id"
        >
          <a :href="sponsor.link" target="_blank" rel="noopener noreferrer" :title="sponsor.name">
            <img class="img-fluid sponsor-logo" :src="encodeURI(sponsor.image)" :alt="sponsor.name" loading="lazy" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sponsor-logo {
  max-height: 120px;
  object-fit: contain;
}
</style>
