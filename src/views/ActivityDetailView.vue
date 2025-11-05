<script setup lang="ts">
import { useActivityStore } from '@/stores/activity.ts'
import { useRoute } from 'vue-router'
import {ref, type Ref, watch} from 'vue'
import type { Activity } from '@/model/Activity.ts'

const route = useRoute()
const store = useActivityStore()

const activity: Ref<Activity | null> = ref(null);

watch(
  () => route.params.id,
  (newValue) => {
    const activityId = Array.isArray(newValue) ? newValue[0] : newValue
    activity.value = store.getActivityById(activityId)
  },
  { immediate: true }
)

function formatTime(date: Date): string {
  if (!(date instanceof Date)) return ''
  return (
    date.getHours().toString().padStart(2, '0') +
    ':' +
    date.getMinutes().toString().padStart(2, '0')
  )
}

</script>

<template>
  <div class="container py-4 my-4" v-if="activity">
    <p>
      <span class="badge" v-for="tag in activity.tags" :key="tag.text" :style="{ 'background-color': tag.color }">
        {{ tag.text }}
      </span>
    </p>
    <h1>{{ activity.title }}</h1>
    <h2 class="fs-4 mb-5 text-muted">{{ activity.organizer }}</h2>

    <div class="row">
      <div class="col-md-8 p-0">
        <img :src="activity.image" class="img-fluid" alt="Actividad" />
      </div>
      <div class="col-md-4 text-bg-primary p-4 d-flex flex-column">
        <p class="fs-4">
          <b class="bi bi-clock"></b> {{
            formatTime(activity.date.start) }} -
          {{ formatTime(activity.date.end) }}
          <br />
          <b class="bi bi-geo-alt"></b> {{ activity.place }}
        </p>
        <p class="flex-grow-1">{{ activity.description }}</p>
        <div class="d-grid" v-if="activity.link">
          <a :href="activity.link" class="btn btn-light" target="_blank">Inscribirme</a>
        </div>
      </div>
    </div>
  </div>
</template>
