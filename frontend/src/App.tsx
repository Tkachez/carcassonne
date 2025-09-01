import styles from '@/App.module.css'
import MainViewport from '@/components/MainViewport'

const App = () => {
  return (
    <div className={styles.appContainer}>
      <MainViewport />
    </div>
  )
}

export default App
