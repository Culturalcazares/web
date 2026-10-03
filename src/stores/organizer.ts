import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { Organizer } from '@/model/Organizer.ts'

export const useOrganizerStore = defineStore('organizer', () => {
  const organizers: Ref<Organizer[]> = ref([])

  function load() {
    organizers.value = []

    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => data.organizers)
      .then((organizersData: [Organizer]) => {
        organizers.value.push(...organizersData)
      })
      .catch((err) => console.log(err))
  }

  return {
    organizers,
    load,
  }
})
