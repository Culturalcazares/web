import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { Collaborator } from '@/model/Collaborator.ts'

export const useCollaboratorStore = defineStore('collaborator', () => {
  const collaborators: Ref<Collaborator[]> = ref([])

  function load() {
    collaborators.value = []

    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => data.collaborators)
      .then((collaboratorsData: [Collaborator]) => {
        collaborators.value.push(...collaboratorsData)
      })
      .catch((err) => console.log(err))
  }

  return {
    collaborators,
    load,
  }
})
