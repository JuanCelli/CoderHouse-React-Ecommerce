import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import addSpaces from "../../utils/addSpaces"


const FilterItemList = ({children,arrayProducts,filterCategoriesInitial=""}) => {
    const [filterStateName,setFilterStateName] = useState("")
    const [filterStateCategories,setFilterStateCategories] = useState(filterCategoriesInitial)

    const {categoryName}= useParams()
    const [categoryUrl, setCategoryUrl] = useState("")

    useEffect(() => {
        if(categoryName===undefined){
            setFilterStateCategories("")
        }else{
            setFilterStateCategories(addSpaces(categoryName))
        }
    }, [categoryName]);
    
    
    const handleFilterChange = (event)=>{
        const inputNameChange = event.target.name

        if(inputNameChange==="filter-title"){
            setFilterStateName(event.target.value)
        }
        else if(inputNameChange==="filter-categories"){
            setFilterStateCategories(event.target.value)
        }
    }

    

    return (
        <>
            {children({filterStateName,filterStateCategories,handleFilterChange,arrayProducts})}
        </>
    )
}

export default FilterItemList