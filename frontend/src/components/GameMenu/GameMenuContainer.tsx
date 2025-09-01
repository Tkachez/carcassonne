import GameMenuComponent from './GameMenuComponent.tsx'

const GameMenuContainer = () => {
  const handleCancel = () => {
    console.log('cancel')
  }

  const handleApprove = () => {
    console.log('approve')
  }

  return <GameMenuComponent onApprove={handleApprove} onCancel={handleCancel} />
}

export default GameMenuContainer
