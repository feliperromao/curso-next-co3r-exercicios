import Filho from "./Filho";

export default function Pai(props) {
    return (
        <div>
            <h1>Familia {props.familia}</h1>
            <Filho nome="Felipe" familia={props.familia} />
            <Filho nome="Junior" familia={props.familia} />
            <Filho {...props} nome="Marina" />
            <Filho {...props} />
        </div>
    )
}