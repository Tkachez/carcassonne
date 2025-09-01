export interface ITile {
  id: number
  edges: Edge[]
  features: Feature[]
  coordinates: Coordinates
}

export type Coordinates = { x: number; y: number }

export type Edge = 'city' | 'road' | 'field'

export type Terrain = 'city' | 'road' | 'field' | 'monastery'

export type Feature = {
  id: string
  type: Terrain
}
