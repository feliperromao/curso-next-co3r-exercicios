export default function Lista1() {
    return generateLista(15)
}

function generateLista(total = 10) {
    const lista = [];
    for (let x = 1; x <= total; x++) {
        lista.push(<span>{x},</span>)
    }

    return lista
}