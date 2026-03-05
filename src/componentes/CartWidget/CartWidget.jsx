
import "./CartWidget.css"
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"

const CartWidget = () => {

  const { cantidadTotal } = useContext(CarritoContext)
  const imgCarrito = "../img/carrito-de-compras.png"

  return (
    <div>
      <Link to="/cart">
        <img className="imgCarrito" src={imgCarrito} alt="Icono carrito de compras" />
        {
          cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
        }
      </Link>
    </div>
  )
}

export default CartWidget