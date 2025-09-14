<script setup lang="ts">
import { useActivityStore } from '@/stores/activity.ts'

const store = useActivityStore()

function handleTagChange(event: Event) {
  const tagText = event.target ? (event.target as HTMLInputElement).value : null
  if (tagText === null) {
    store.setTagFilter(null)
  } else {
    const selectedTag = Array.from(store.tags).find((tag) => tag.text === tagText)
    store.setTagFilter(selectedTag || null)
  }
}

function handleTimeChange(event: Event) {
  const timeValue = event.target ? (event.target as HTMLInputElement).value : null
  if (timeValue === null) {
    store.setTimeFilter(null)
  } else {
    const selectedTime = Array.from(store.times).find((time) => time.toString() === timeValue)
    store.setTimeFilter(selectedTime || null)
  }
}

// Filter to format dates to HH:MM format
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
  <div id="program">
    <div class="container py-5">
      <h2 class="fs-1 mb-4 order-0">Programa</h2>
      <a
        class="btn btn-sm btn-outline-primary m-0"
        data-bs-toggle="collapse"
        href="#filters"
        role="button"
        aria-expanded="false"
        aria-controls="filters"
      >
        <i class="bi bi-filter" /> Filtrar
      </a>
      <div class="collapse card p-3 mb-4" id="filters">
        <div class="row justify-content-center">
          <div class="col-md-4">
            <div class="form-floating">
              <select
                class="form-select"
                id="type-select"
                aria-label="Type select"
                @change="handleTagChange"
              >
                <option :value="null" selected>Sin filtro</option>
                <option v-for="tag in store.tags" :value="tag.text">{{ tag.text }}</option>
              </select>
              <label for="floatingSelect">Tipo de actividad</label>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-floating">
              <select
                class="form-select"
                id="time-select"
                aria-label="Type select"
                @change="handleTimeChange"
              >
                <option :value="null" selected>Sin filtro</option>
                <option v-for="time in store.times" :value="time.toString()">
                  {{ formatTime(time) }}
                </option>
              </select>
              <label for="floatingSelect">Horario</label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="row mt-2">
          <div class="col-md-4 mb-4" v-for="activity in store.filteredActivities">
            <div class="card">
              <img :src="activity.image" class="card-img-top bg-light" alt="Actividad" />
              <div class="card-body">
                <p>
                  <span
                    class="badge"
                    v-for="tag in activity.tags"
                    :style="{ 'background-color': tag.color }"
                    >{{ tag.text }}</span
                  >
                </p>
                <h5 class="card-title">{{ activity.title }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ activity.organizer }}</h6>
                <p class="card-text mt-4">
                  <i class="bi bi-clock"></i> {{ formatTime(activity.date.start) }} -
                  {{ formatTime(activity.date.end) }}
                  <br />
                  <i class="bi bi-geo-alt"></i> {{ activity.place }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
