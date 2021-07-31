import Linha from '../../components/Linha';
import styles from '../../styles/Home.module.css';


export default function tabuleiro() {

  return (
    <div className={styles.container}>
      <Linha />
      <Linha preta />
      <Linha />
      <Linha preta />
      <Linha />
      <Linha preta />
      <Linha />
      <Linha preta />
    </div>
  )
}