import React from 'react'

const TileComponent: React.FC<React.PropsWithChildren> = ({ children }) => (
  <g fill='green'>{children}</g>
)

export default TileComponent
