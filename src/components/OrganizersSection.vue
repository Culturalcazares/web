<script setup lang="ts">
import { useOrganizerStore } from '@/stores/organizer.ts'

const store = useOrganizerStore()

</script>

<template>
  <div id="organizers" class="container my-5" v-if="store.organizers && store.organizers.length > 0">
    <h2 class="fs-1 mb-3">Organiza</h2>
    <div class="row justify-content-center">
      <div
        class="col-6 col-md-4 d-flex align-items-center justify-content-center p-3"
        v-for="organizer in store.organizers"
        :key="organizer.id"
      >
        <a
          v-if="organizer.link"
          :href="organizer.link"
          target="_blank"
          rel="noopener noreferrer"
          :title="organizer.name"
        >
          <img class="img-fluid organizer-logo" :src="encodeURI(organizer.image)" :alt="organizer.name" loading="lazy" />
        </a>
        <img
          v-else
          class="img-fluid organizer-logo"
          :src="encodeURI(organizer.image)"
          :alt="organizer.name"
          :title="organizer.name"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.organizer-logo {
  max-height: 140px;
  object-fit: contain;
}
</style>
