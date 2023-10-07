import { useContext, useState } from "react"
import { CartContext } from "../../context/cartContext"


const CheckoutContainer = () => {
    const [dataForm, setDataForm] = useState ({
        name:"",
        dni:"",
        mail:"",
        phone:"",
        payMethod:"efectivo",
        numberCard:""
    })
    

    const {handleAddOrder,getPriceCart, getQualityProducts} = useContext(CartContext)

    const handleOnChange =(event)=>{
        setDataForm({
            ...dataForm,
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit = (event) =>{
        handleAddOrder(dataForm)
        event.preventDefault()
    }

  return (
    <div className="container-checkout">
      <div>
        <h2>Finalizar Compra</h2>
        <div>
            <p>Total: ${getPriceCart()}</p>
            <p>Cantidad de productos: {getQualityProducts()} </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ej: Juan"
              value={dataForm.name}
              onChange={handleOnChange}
              required
            />
          </div>
          <div>
            <label htmlFor="dni">DNI:</label>
            <input
              type="text"
              id="dni"
              name="dni"
              inputMode="numeric"
              pattern="[0-9]{8}"
              placeholder="Ej: 41184571"
              value={dataForm.dni}
              onChange={handleOnChange}
              required
            />
          </div>

          <div>
            <label htmlFor="mail">Correo Electrónico:</label>
            <input
              type="email"
              id="mail"
              name="mail"
              placeholder="Ej: juan@gmail.com"
              value={dataForm.mail}
              onChange={handleOnChange}
              required
            />
          </div>

          <div>
            <label htmlFor="phone">Número de Teléfono:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Ej: 1154265378"
              value={dataForm.phone}
              onChange={handleOnChange}
              required
            />
          </div>

          <div>
            <label htmlFor="payMethod">Medio de Pago:</label>
            <select
              id="payMethod"
              name="payMethod"
              value={dataForm.payMethod}
              onChange={handleOnChange}
            >
              <option value="efectivo">Efectivo</option>
              <option value="credito">Tarjeta de Crédito</option>
              <option value="debito">Tarjeta de Débito</option>
            </select>

            {(dataForm.payMethod==="debito"||dataForm.payMethod==="credito")&&
                        <div>
                            <label htmlFor="numberCard">Número de tarjeta:</label>
                            <input
                                type="text"
                                id="numberCard"
                                name="numberCard"
                                placeholder="Ej: 4344-5555-5523-4562"
                                pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}"
                                value={dataForm.numberCard}
                                onChange={handleOnChange}
                                required
                            />
                        </div>
        }
          </div>

          <button type="submit" >Comprar</button>
        </form>
      </div>
    </div>
  )
}

export default CheckoutContainer