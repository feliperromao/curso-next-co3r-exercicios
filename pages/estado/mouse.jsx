import { useState } from "react"

export default () => {
    const [xAxis, setXAxis] = useState(0)
    const [yAxis, setYAxis] = useState(0)

    const estilo = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#222",
        height: "100vh",
        color: "#fff"
    }

    function handleMouseMove (event) {
        setXAxis(event.clientX)
        setYAxis(event.clientY)
    }

    return (
        <div style={estilo} onMouseMove={handleMouseMove}>
            <span>Eixo X: {xAxis}</span>
            <span>Eixo Y: {yAxis}</span>
        </div>
    )
}