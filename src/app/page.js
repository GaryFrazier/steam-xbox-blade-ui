import styles from './page.module.css'
import Dashboard from '../components/dashboard/dashboard';

export default function Home() {
  return (
    <main className={styles.main}>
      <Dashboard /> 
    </main>
  )
}
