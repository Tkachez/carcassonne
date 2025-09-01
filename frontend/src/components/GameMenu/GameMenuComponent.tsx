import styles from './GameMenu.module.css'
import React from 'react'

type GameMenuComponentProps = {
  onApprove: () => void
  onCancel: () => void
}

const GameMenuComponent: React.FC<GameMenuComponentProps> = ({ onApprove, onCancel }) => (
  <div className={styles.menu__container}>
    <button onClick={onApprove}>Approve</button>
    <button onClick={onCancel}>Cancel</button>
  </div>
)

export default GameMenuComponent
