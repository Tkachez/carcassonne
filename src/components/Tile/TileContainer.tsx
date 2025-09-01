import TileComponent from './TileComponent.tsx'

import { CONFIG } from '@/config/consts.ts'

import type { ITile } from '@/types/tile.ts'

const TileContainer = ({
  // edges,
  // features,
  coordinates
}: ITile) => (
  <TileComponent>
    <rect
      x={coordinates.x}
      y={coordinates.y}
      width={CONFIG.TILE_WIDTH}
      height={CONFIG.TILE_HEIGHT}
    />
    <path
      d={`M${coordinates.x} ${coordinates.y} Q${coordinates.x + 50} ${coordinates.y + 60} ${coordinates.x + 100} ${coordinates.y} L${coordinates.x} ${coordinates.y}`}
      fill='brown'
    />
    <rect
      x={coordinates.x}
      y={coordinates.y + CONFIG.TILE_HEIGHT / 2 - CONFIG.ROAD_WIDTH / 2}
      width={CONFIG.TILE_WIDTH}
      height={CONFIG.ROAD_WIDTH}
      fill='wheat'
    />
  </TileComponent>
)

export default TileContainer
