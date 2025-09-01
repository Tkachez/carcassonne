import { create } from 'zustand'
import type { Coordinates, ITile } from '@/types/tile.ts'

interface GameState {
  tiles: ITile[]
  playedTiles: ITile[]
  addTile: (tile: ITile) => void
  setCoordinates: (tileId: ITile['id'], coordinates: Coordinates) => void
}

const initialTile: ITile = {
  id: Date.now(),
  edges: ['city', 'road', 'field', 'road'],
  features: [
    {
      id: 'f1',
      type: 'city'
    },
    {
      id: 'f2',
      type: 'road'
    },
    {
      id: 'f3',
      type: 'field'
    },
    {
      id: 'f4',
      type: 'field'
    }
  ],
  coordinates: { x: 0, y: 0 }
}

export const useGamesStore = create<GameState>((set) => ({
  tiles: [],
  playedTiles: [initialTile],
  addTile: (tile: ITile) => set((state) => ({ tiles: [...state.tiles, tile] })),
  setCoordinates: (tileId: ITile['id'], coordinates: Coordinates) =>
    set((state) => ({
      playedTiles: state.playedTiles.map((tile) =>
        tile.id === tileId ? { ...tile, coordinates } : tile
      )
    }))
}))
