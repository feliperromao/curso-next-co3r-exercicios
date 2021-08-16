import { useState } from "react"

export default function formulario() {
    const [valor, setValor] = useState("inicial")

    return (
        <div>
            <input value={valor} onChange={e => setValor(e.target.value)} type="text" />
        </div>
    )
}