import { useState } from "react"

export default () => {
    const [value, setValue] = useState(0)

    return (
        <div>
            <h1>Contador</h1>
            <div>Valor: {value}</div>
            <button onClick={() => setValue(value - 1)}>-</button>
            <button onClick={() => setValue(value + 1)}>+</button>
        </div>
    )
}