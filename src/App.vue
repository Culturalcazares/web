<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { useActivityStore } from '@/stores/activity.ts'
import {useSponsorStore} from "@/stores/sponsor.ts";

const activityStore = useActivityStore()
activityStore.load()

const sponsorStore = useSponsorStore()
sponsorStore.load()

</script>

<template>
  <div class="d-flex flex-column min-vh-100">
    <Header />
    <main class="flex-grow-1">
      <router-view />
    </main>
    <Footer />
  </div>
</template>
