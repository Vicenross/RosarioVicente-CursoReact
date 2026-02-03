import { useState, useEffect } from "react"
import { getProductos, getProductosPorCategoria } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"

import { useParams } from "react-router-dom"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const {idCategoria} = useParams()

    useEffect(()=>{
        const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos

        funcionProductos(idCategoria)
        .then(res=> setProductos(res))
        
    },[idCategoria])

  return (
    <>
      <h2>PRODUCTOS</h2>
      <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer