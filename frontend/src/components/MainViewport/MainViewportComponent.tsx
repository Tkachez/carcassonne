import React from 'react'

import GameMenu from '@/components/GameMenu'
import Tile from '@/components/Tile'

import styles from './MainViewport.module.css'

import type { ITile } from '@/types/tile.ts'

type MainViewportComponentProps = {
  ref: React.RefObject<HTMLDivElement | null>
  items: ITile[]
  onPointerDown: () => void
  onPointerUp: () => void
  onPointerMove: (e: React.PointerEvent<SVGSVGElement>) => void
  position: number[]
}

const MainViewportComponent: React.FC<MainViewportComponentProps> = ({
  ref,
  items,
  position,
  onPointerDown,
  onPointerUp,
  onPointerMove
}) => (
  <div ref={ref} className={styles.viewport__container}>
    <svg
      className={styles.viewport__canvas}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerMove={onPointerMove}
    >
      <g
        clipPath={styles.viewport__canvas}
        transform={`matrix(1, 0, 0, 1, ${position[0]}, ${position[1]})`}
      >
        {items.map((item) => (
          <Tile key={item.id} {...item} />
        ))}
      </g>
    </svg>
    <GameMenu />
  </div>
)

export default MainViewportComponent
