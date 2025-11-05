<script setup lang="ts">

import type {Activity} from "@/model/Activity.ts";

interface Props {
  activity: Activity
}

const props = defineProps<Props>()

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
  <div class="card">
    <RouterLink :to="{ name: 'activity', params: { id: props.activity.id }}">
      <img :src="props.activity.image" class="card-img-top bg-light" alt="Actividad" />
    </RouterLink>
    <div class="card-body">
      <p>
        <span class="badge" v-for="tag in props.activity.tags" :key="tag.text" :style="{ 'background-color': tag.color }">
          {{ tag.text }}
        </span>
      </p>
      <h5 class="card-title">{{ props.activity.title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ props.activity.organizer }}</h6>
      <p class="card-text mt-4">
        <i class="bi bi-clock"></i> {{ formatTime(props.activity.date.start) }} -
        {{ formatTime(props.activity.date.end) }}
        <br />
        <i class="bi bi-geo-alt"></i> {{ props.activity.place }}
      </p>
    </div>
  </div>
</template>
