export interface Musician {
  id: string
  name: string
  role: string
}

export interface Instrument {
  id: string
  name: string
  requiresTransport: boolean
}

export interface Venue {
  id: string
  name: string
  city: string
  unavailableDates: string[]
}

export interface Show {
  id: string
  tourSeasonId: string
  city: string
  venueId: string
  venueName: string
  startTime: string
  durationMinutes: number
  musicianIds: string[]
  instrumentIds: string[]
}

export interface TourSeason {
  id: string
  name: string
  startDate: string
  endDate: string
}

export type ConflictType = 'musician_overlap' | 'transport_window' | 'venue_unavailable'

export interface Conflict {
  type: ConflictType
  showId: string
  relatedShowId?: string
  message: string
  details: string
}

export type TimelineViewMode = 'week' | 'month'

export interface DragState {
  isDragging: boolean
  showId: string | null
  startX: number
  originalStartTime: string
}
