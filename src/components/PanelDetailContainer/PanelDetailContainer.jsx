import useCounter from "../../hooks/useCounter"


const PanelDetailContainer = (props) => {
    const {initial,stock} = props
    const {count, handleAdd, handleSubtract} = useCounter(initial,stock)
    return (
        <div>
            <div>
                <button onClick={handleSubtract}>-</button>
                <span>{count}</span>
                <button onClick={handleAdd}>+</button>
            </div>
            <button>Agregar</button>
        </div>
    )
}

export default PanelDetailContainer