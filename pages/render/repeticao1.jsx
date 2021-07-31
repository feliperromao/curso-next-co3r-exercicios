export default function repeticao1 () {
  const listaAprovados = [
    'Jose',
    'Felipe',
    'Romao',
    'Martins',
    'Marina',
    'Lacerda'
  ]

  function renderLista() {
    return listaAprovados.map((nome, index) => <li key={index}>{nome}</li>)
  }

  return (
    <ul>
      {renderLista()}
    </ul>
  )
}


// function renderLista() {
//   const itens = []
//   for (let i = 0; i < listaAprovados.length; i++) {
//     itens.push(
//       <li key={i}>{listaAprovados[i]}</li>
//     )
//   }
//   return itens
// }