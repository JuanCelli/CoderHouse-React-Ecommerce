import {BrowserRouter,Routes,Route} from "react-router-dom"

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartWidgetContainer from "./components/CartWidgetContainer/CartWidgetContainer";
import NavBarContainer from './components/NavBarContainer/NavBarContainer';
import CartContextProvider from "./context/cartContext";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import CheckoutContainer from "./components/CheckoutContainer/CheckoutContainer";





function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
          <NavBarContainer/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
            <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<CartWidgetContainer/>}/>
            <Route path='/checkout' element={<CheckoutContainer/>}/>
          </Routes>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
