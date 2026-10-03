<script setup lang="ts">
import HeaderBar from './components/HeaderBar.vue'
import WebFooter from './components/WebFooter.vue'
import { useActivityStore } from '@/stores/activity.ts'
import {useSponsorStore} from "@/stores/sponsor.ts";
import { useCollaboratorStore } from '@/stores/collaborator.ts'
import { useOrganizerStore } from '@/stores/organizer.ts'

const activityStore = useActivityStore()
activityStore.load()

const sponsorStore = useSponsorStore()
sponsorStore.load()

const collaboratorStore = useCollaboratorStore()
collaboratorStore.load()

const organizerStore = useOrganizerStore()
organizerStore.load()

</script>

<template>
  <div class="d-flex flex-column min-vh-100">
    <HeaderBar />
    <main class="flex-grow-1">
      <router-view />
    </main>
    <WebFooter />
  </div>
</template>

