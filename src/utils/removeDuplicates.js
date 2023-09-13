// Se le pasa un array de objetos y devuelve un array de todos los valores de una propiedad definida, sin repetir valores.

const removeDuplicate = (array,property) =>{
    const propertysWithDuplicates = array.map(element=>{
        return element[property]
    })
    const propertys = propertysWithDuplicates.filter((element, indice, array) => {
        return array.indexOf(element) === indice;
      });

    return propertys

}

export default removeDuplicate