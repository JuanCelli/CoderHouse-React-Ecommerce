import useCounter from "../../hooks/useCounter"


const PanelDetailContainer = (props) => {
    const {initial,stock,onAdd} = props
    const {count, handleAdd, handleSubtract} = useCounter(initial,stock)

    const handleOnAdd = ()=>{
        onAdd(count)
    }
    
    return (
        <div>
            <div>
                <button onClick={handleSubtract}>-</button>
                <span>{count}</span>
                <button onClick={handleAdd}>+</button>
            </div>
            <button onClick={handleOnAdd}>Agregar</button>
        </div>
    )
}

export default PanelDetailContainer