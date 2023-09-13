import { useState } from "react"

const useCounter = (initial,stock) =>{
    const[count,setCount] = useState(initial)

    const handleAdd = ()=>{
        if(count+1<=stock||stock===undefined){ // Si stock no está definido el contandor no tiene limites
            setCount(count+1)
        }
    }

    const handleSubtract = ()=>{
        if(count-1>=initial){
            setCount(count-1)
        }
    }
    return {count, handleAdd, handleSubtract}
}

export default useCounter