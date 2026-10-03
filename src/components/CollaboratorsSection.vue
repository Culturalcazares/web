<script setup lang="ts">
import { useCollaboratorStore } from '@/stores/collaborator.ts'

const store = useCollaboratorStore()

</script>

<template>
  <div id="collaborators" class="container my-5" v-if="store.collaborators && store.collaborators.length > 0">
    <h2 class="fs-1 mb-3">Colabora</h2>
    <div class="row">
      <div
        class="col-6 col-md-4 d-flex flex-column align-items-center justify-content-center p-3"
        v-for="collaborator in store.collaborators"
        :key="collaborator.id"
      >
        <a
          v-if="collaborator.link"
          class="collaborator-item d-flex flex-column align-items-center text-center"
          :href="collaborator.link"
          target="_blank"
          rel="noopener noreferrer"
          :title="collaborator.name"
        >
          <img class="img-fluid collaborator-logo" :src="encodeURI(collaborator.image)" :alt="collaborator.name" loading="lazy" />
          <span class="collaborator-name mt-2">{{ collaborator.name }}</span>
        </a>
        <div v-else class="collaborator-item d-flex flex-column align-items-center text-center" :title="collaborator.name">
          <img class="img-fluid collaborator-logo" :src="encodeURI(collaborator.image)" :alt="collaborator.name" loading="lazy" />
          <span class="collaborator-name mt-2">{{ collaborator.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.collaborator-logo {
  max-height: 100px;
  object-fit: contain;
}

.collaborator-item {
  color: inherit;
  text-decoration: none;
}

.collaborator-name {
  font-size: 0.95rem;
}
</style>
