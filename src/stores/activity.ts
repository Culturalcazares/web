import {ref, computed, type Ref} from 'vue'
import { defineStore } from 'pinia'
import type {Activity} from "@/model/Activity.ts";
import type {Tag} from "@/model/Tag.ts";

export const useActivityStore = defineStore('activity', () => {
  const activities:Ref<Activity[]> = ref([])
  const tags:Ref<Set<Tag>> = ref(new Set<Tag>())
  const times:Ref<Set<Date>> = ref(new Set<Date>())

  const filters = ref<{
    tag: Tag|null,
    time: Date|null
  }>({
    tag: null,
    time: null,
  })

  function load() {
    activities.value = []

    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        return data.activities.map((activity: Activity) => {
          return {
            ...activity,
            date: {
              start: new Date(activity.date.start),
              end: new Date(activity.date.end)
            }
          }
        })
      })
      .then((activitiesData: [Activity]) => {
        activities.value.push(...activitiesData)

        activitiesData.forEach(activity => {
          activity.tags.forEach(tag => {
            tags.value.add(tag);
          });
          times.value.add(activity.date.start);
        });
      })
      .catch((err) => console.log(err))
  }

  function setTagFilter(tag: Tag|null) {
    filters.value.tag = tag
  }

  function setTimeFilter(time: Date|null) {
    filters.value.time = time?new Date(time): null;
  }


  const filteredActivities = computed(() => {
    return activities.value.filter(activity => {
      if (!filters.value.tag && !filters.value.time) return true
      const matchesTag = !filters.value.tag ||
        activity.tags.some(tag => tag.text === filters.value.tag?.text)

      const matchesTime = !filters.value.time ||
        activity.date.start.getTime() === filters.value.time.getTime()

      return matchesTag && matchesTime
    })
  })

  return {
    activities,
    filteredActivities,
    tags,
    times,
    filters,
    setTagFilter,
    setTimeFilter,
    load
  }
})
