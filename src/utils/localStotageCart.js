export function localStoarageCartRefresh(cartList){
    localStorage.setItem("cart",JSON.stringify(cartList))
}

export function startCart() {
    return (JSON.parse(localStorage.getItem("cart")) ?? [])
}