<script setup lang="ts">
import type { Activity } from '@/model/Activity.ts'
import ActivityCard from '@/components/ActivityCard.vue'
import Masonry from 'masonry-layout'
import imagesLoaded from 'imagesloaded'
import { onBeforeUnmount, onMounted, onUpdated, ref } from 'vue'

interface Props {
  activities: Activity[]
}

const props = defineProps<Props>()

const masonryContainer = ref<HTMLElement | null>(null)
let msnry: Masonry | null = null

function initMasonry() {
  if (masonryContainer.value) {
    if (msnry) msnry.destroy?.()
    msnry = new Masonry(masonryContainer.value, {
      itemSelector: '.masonry-item',
      percentPosition: true,
    })
    imagesLoaded(masonryContainer.value, () => {
      msnry?.layout?.()
    })
  }
}

onMounted(initMasonry)
onUpdated(initMasonry)
onBeforeUnmount(() => {
  msnry?.destroy?.()
  msnry = null
})
</script>

<template>
  <div class="row mt-2" ref="masonryContainer">
    <div class="col-md-4 mb-4 masonry-item" v-for="activity in props.activities" :key="activity.id">
      <activity-card :activity="activity" />
    </div>
  </div>
</template>

<style scoped></style>
