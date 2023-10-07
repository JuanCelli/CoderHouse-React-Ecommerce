import filterArrayProducts from "../../utils/filterArrayProducts"

import ProductCard from "../ProductCard/ProductCard"
import FilterItemList from "../FilterItemList/FilterItemList"




const ItemList = (props) => {
  const {arrayProducts, filterCategoriesInitial} = props

  const handleProductFilter = ({filterStateName,filterStateCategories,handleFilterChange,arrayProducts}) =>{

  const arrayProductsFiltered = filterArrayProducts(arrayProducts,filterStateName,filterStateCategories)
    return (
      
      <div>
          <div>
            <input onChange={handleFilterChange} value={filterStateName} name="filter-title" type="text" placeholder="Buscar..."></input>
          </div>
          {arrayProductsFiltered.length>0 ?
            <>
              <div className="container-item-list">
                  {arrayProductsFiltered.map(product=>(<ProductCard key={product.id} id={product.id} image={product.image} title={product.title} price={product.price} category={product.category}/>))}
              </div>
            </>
            :
            <h2>No se han encontrado productos coincidentes</h2>
          }
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