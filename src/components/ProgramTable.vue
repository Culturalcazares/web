<script setup lang="ts">
import type { Activity } from '@/model/Activity.ts'
import { computed } from 'vue'

interface Props {
  activities: Activity[]
}

const props = defineProps<Props>()

interface Space {
  name: string
  lanes: Activity[][]
}

interface Slot {
  start: number
  end: number
}

interface Cell {
  key: string
  activity: Activity | null
  rowspan: number
}

interface Row {
  slot: Slot
  cells: Cell[]
}

// Spaces (columns), in order of first appearance. Each space is split into
// lanes so that activities overlapping in time in the same space get their own sub-column.
const spaces = computed<Space[]>(() => {
  const byPlace = new Map<string, Activity[]>()
  const sorted = [...props.activities].sort(
    (a, b) => a.date.start.getTime() - b.date.start.getTime(),
  )
  sorted.forEach((activity) => {
    const list = byPlace.get(activity.place) ?? []
    list.push(activity)
    byPlace.set(activity.place, list)
  })

  return Array.from(byPlace.entries()).map(([name, activities]) => {
    const lanes: Activity[][] = []
    activities.forEach((activity) => {
      const lane = lanes.find(
        (l) => l[l.length - 1]!.date.end.getTime() <= activity.date.start.getTime(),
      )
      if (lane) lane.push(activity)
      else lanes.push([activity])
    })
    return { name, lanes }
  })
})

// Time slots (rows), delimited by every start and end time of the activities.
const slots = computed<Slot[]>(() => {
  const boundaries = new Set<number>()
  props.activities.forEach((activity) => {
    boundaries.add(activity.date.start.getTime())
    boundaries.add(activity.date.end.getTime())
  })
  const sorted = Array.from(boundaries).sort((a, b) => a - b)
  const result: Slot[] = []
  for (let i = 0; i < sorted.length - 1; i++) {
    const start = sorted[i]!
    const end = sorted[i + 1]!
    const hasActivity = props.activities.some(
      (activity) => activity.date.start.getTime() < end && activity.date.end.getTime() > start,
    )
    if (hasActivity) result.push({ start, end })
  }
  return result
})

const rows = computed<Row[]>(() => {
  return slots.value.map((slot, slotIndex) => {
    const cells: Cell[] = []
    spaces.value.forEach((space) => {
      space.lanes.forEach((lane, laneIndex) => {
        const activity = lane.find(
          (a) => a.date.start.getTime() < slot.end && a.date.end.getTime() > slot.start,
        )
        const key = `${space.name}-${laneIndex}`
        if (!activity) {
          cells.push({ key, activity: null, rowspan: 1 })
          return
        }
        const startsHere =
          activity.date.start.getTime() >= slot.start ||
          slotIndex === 0 ||
          !overlaps(activity, slots.value[slotIndex - 1]!)
        if (!startsHere) return
        let rowspan = 1
        while (
          slotIndex + rowspan < slots.value.length &&
          overlaps(activity, slots.value[slotIndex + rowspan]!)
        ) {
          rowspan++
        }
        cells.push({ key, activity, rowspan })
      })
    })
    return { slot, cells }
  })
})

function overlaps(activity: Activity, slot: Slot): boolean {
  return activity.date.start.getTime() < slot.end && activity.date.end.getTime() > slot.start
}

function formatTime(time: number): string {
  const date = new Date(time)
  return (
    date.getHours().toString().padStart(2, '0') +
    ':' +
    date.getMinutes().toString().padStart(2, '0')
  )
}

function formatDate(date: Date): string {
  return formatTime(date.getTime())
}
</script>

<template>
  <div class="table-responsive mt-2">
    <table class="table table-bordered table-sm align-middle program-table">
      <thead>
        <tr>
          <th scope="col" class="time-col">Horas</th>
          <th
            v-for="space in spaces"
            :key="space.name"
            scope="col"
            class="text-center"
            :colspan="space.lanes.length"
          >
            {{ space.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.slot.start">
          <th scope="row" class="time-col text-nowrap">
            {{ formatTime(row.slot.start) }} - {{ formatTime(row.slot.end) }}
          </th>
          <template v-for="cell in row.cells" :key="cell.key">
            <td
              v-if="cell.activity"
              :rowspan="cell.rowspan"
              class="activity-cell"
              :style="{ 'background-color': cell.activity.tags[0]?.color }"
            >
              <RouterLink
                :to="{ name: 'activity', params: { id: cell.activity.id } }"
                class="text-dark text-decoration-none d-block"
              >
                <strong>{{ cell.activity.title }}</strong>
                <br />
                <small>
                  {{ formatDate(cell.activity.date.start) }} - {{ formatDate(cell.activity.date.end) }}
                </small>
                <span v-if="cell.activity.full" class="badge text-bg-danger ms-1">Completo</span>
              </RouterLink>
            </td>
            <td v-else></td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.program-table th,
.program-table td {
  min-width: 8rem;
}

.program-table .time-col {
  position: sticky;
  left: 0;
  background-color: var(--bs-body-bg);
  z-index: 1;
}

.activity-cell {
  vertical-align: top;
}
</style>
