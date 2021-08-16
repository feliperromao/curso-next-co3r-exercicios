import { useEffect, useState } from "react"
import mega from "../../functions/mega"

export default function megasena() {
    const numStyle = {
        color: '#fff',
        fontSize: '2rem',
        width: 80,
        height: 80,
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderRadius: 40
    }
    const [valores, setValores] = useState([])

    useEffect(() => {
        setValores(mega(10))
    }, [])

    const valoresRender = valores.map(numero => <div key={numero} style={numStyle}>{numero}</div>)

    function generateNewValues() {
        setValores(mega(10))
    }

    return (
        <div style={{
            backgroundColor: '#fff',
            height: '100vh',
            color: '#000',
            margin: 0,
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            <div style={{display: 'flex'}}>
                {valoresRender}
            </div>
            <button onClick={generateNewValues}>Gerar outros</button>
        </div>

    )
}