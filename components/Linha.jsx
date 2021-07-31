import Subdivisao from "./Subdivisao";

import styles from '../styles/Linha.module.css'

export default function Linha (props) {
  const itens = []
  let preta = props.preta ? true: false
  for(let x = 1; x <= 8; x++) {
    itens.push(
      preta ? <Subdivisao preta /> : <Subdivisao />
    )

    preta = !preta
  }
  return (
    <div className={styles.linha}>
      {itens}
    </div>
  )
}