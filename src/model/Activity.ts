import type { ActivityDate } from '@/model/ActivityDate.ts'
import type { Tag } from '@/model/Tag.ts'

export type Activity = {
  id: string
  title: string
  organizer: string
  image: string
  date: ActivityDate
  place: string
  tags: Tag[]
}
