import "./ItemListContainer.css"


function ItemListContainer(props){
    return(
        <div className="container-item-list-container">
            <p className="greeting">{props.greeting}</p>
        </div>
        )
    }
        
    
    
export default ItemListContainer