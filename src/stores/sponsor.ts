import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { Sponsor } from '@/model/Sponsor.ts'

export const useSponsorStore = defineStore('sponsor', () => {
  const sponsors: Ref<Sponsor[]> = ref([])

  function load() {
    sponsors.value = []

    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => data.sponsors)
      .then((sponsorsData: [Sponsor]) => {
        sponsors.value.push(...sponsorsData)
      })
      .catch((err) => console.log(err))
  }

  return {
    sponsors,
    load,
  }
})
