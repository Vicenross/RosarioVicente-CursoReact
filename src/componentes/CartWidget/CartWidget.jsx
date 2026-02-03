
import "./CartWidget.css"

const CartWidget = () => {

    const imgCarrito = "./public/img/carrito-de-compras.png"

  return (
    <div>
        <img className="imgCarrito" src={imgCarrito} alt="Icono carrito de compras" />
    </div>
  )
}

export default CartWidget