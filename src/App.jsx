import {BrowserRouter,Routes,Route} from "react-router-dom"

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import NavBarContainer from './components/NavBarContainer/NavBarContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'




function App() {
  return (
    <BrowserRouter>
      <NavBarContainer/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
        <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<CartContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
