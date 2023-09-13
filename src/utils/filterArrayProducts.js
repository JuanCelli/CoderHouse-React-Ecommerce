const filterArrayProducts = (arrayProdcucts,filterStateName, filterStateCategories) =>{
    let arrayFilteredCategory = (filterStateCategories===undefined|| filterStateCategories===""? arrayProdcucts : arrayProdcucts.filter(product=>product.category === filterStateCategories))
    let arrayFiltered = (filterStateName==="" ? arrayFilteredCategory : arrayFilteredCategory.filter(product=>product.title.toLowerCase().includes(filterStateName.toLowerCase())))

    return arrayFiltered
}

export default filterArrayProducts