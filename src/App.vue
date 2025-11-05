<script setup lang="ts">
import HeaderBar from './components/HeaderBar.vue'
import WebFooter from './components/WebFooter.vue'
import { useActivityStore } from '@/stores/activity.ts'
import {useSponsorStore} from "@/stores/sponsor.ts";

const activityStore = useActivityStore()
activityStore.load()

const sponsorStore = useSponsorStore()
sponsorStore.load()

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
