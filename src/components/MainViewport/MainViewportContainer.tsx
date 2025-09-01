import React from 'react'

import { useResizeObserver } from '@/hooks/useResizeObserver.tsx'
import { useGamesStore } from '@/stores/useGamesStore.ts'
import MainViewportComponent from './MainViewportComponent.tsx'
import { CONFIG } from '@/config/consts.ts'

const MainViewportContainer = () => {
  const [isDragging, setIsDragging] = React.useState<boolean>(false)
  const { ref, rect } = useResizeObserver()
  const { playedTiles, setCoordinates } = useGamesStore()

  const [position, setPosition] = React.useState<number[]>([0, 0])

  React.useEffect(() => {
    if (rect) {
      const x = rect.width / 2 - CONFIG.TILE_WIDTH / 2
      const y = rect.height / 2 - CONFIG.TILE_HEIGHT / 2

      setCoordinates(playedTiles[0].id, { x, y })
      // setPosition([0, 0])
    }
  }, [rect])

  const handlePointerDown = () => {
    setIsDragging(true)
  }

  const handlePointerUp = () => {
    setIsDragging(false)
  }

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (isDragging && rect) {
      const offsetX = -(rect.width / 2 - e.clientX - rect.left)
      const offsetY = -(rect.height / 2 - e.clientY - rect.top)

      setPosition([offsetX, offsetY])
    }
  }

  // const handleReturnToInitialView = () => {
  //     setPosition([0, 0])
  // }

  return (
    <MainViewportComponent
      ref={ref}
      position={position}
      items={playedTiles}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
    />
  )
}

export default MainViewportContainer
