import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.css"




const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext)
    if (cantidadTotal === 0) {
        return (
            <div className="carritoVacio">
                <h2>El carrito aun esta vacio</h2>
                <Link className="botonRegreso" to="/">Ver Productos</Link>
            </div>
        )

    }

    return (
        <div className="carritoTotal">
            <div className="cartItems">
                {
                    carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)
                }
            </div>
            <h3>Precio Total: ${total}</h3>
            <h3>Cantidad total de productos: {cantidadTotal}</h3>
            <div className="cartBotones">
                <button className="botonRegreso" onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
                <Link className="botonRegreso" to="/checkout">Finalizar Compra</Link>
            </div>

        </div>
    )
}

export default Cart