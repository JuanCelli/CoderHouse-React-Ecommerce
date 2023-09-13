import removeDuplicate from "../../utils/removeDuplicates"
import filterArrayProducts from "../../utils/filterArrayProducts"

import ProductCard from "../ProductCard/ProductCard"
import FilterItemList from "../FilterItemList/FilterItemList"




const ItemList = (props) => {
  const {arrayProducts, filterCategoriesInitial} = props


  const handleProductFilter = ({filterStateName,filterStateCategories,handleFilterChange,arrayProducts}) =>{
    const categories = removeDuplicate(arrayProducts,"category")

    return (
      <div>
          <div>
            <input onChange={handleFilterChange} value={filterStateName} name="filter-title" type="text" placeholder="Buscar..."></input>
            <select onChange={handleFilterChange} value={filterStateCategories} name="filter-categories" id="">
              <option disabled value={""}>Elige categoría</option>
              <option value={""}>Todos</option>
              {categories.map((category)=><option key={category} value={category}>{category}</option>)}  
            </select>
          </div>
          <div className="container-item-list">
              {filterArrayProducts(arrayProducts,filterStateName,filterStateCategories).map(product=>(<ProductCard key={product.id} id={product.id} image={product.image} title={product.title} price={product.price} category={product.category}/>))}
          </div>
      </div>
    )
  }


  return (

    <FilterItemList arrayProducts={arrayProducts} filterCategoriesInitial={filterCategoriesInitial}>
      {handleProductFilter}
    </FilterItemList>
  )
}

export default ItemList