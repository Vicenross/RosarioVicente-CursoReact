import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { db } from "../../services/Config"
import { collection, getDocs, query, where } from "firebase/firestore"

import { useParams } from "react-router-dom"

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  const { idCategoria } = useParams()

  useEffect(() => {
    const misProductos = idCategoria ? query(collection(db, "Productos"), where("idCat", "==", idCategoria)) : collection(db, "Productos")

    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data()
          return {id: doc.id, ...data}
        })
        setProductos(nuevosProductos)
      })
      .catch(error => console.log(error))
  }, [idCategoria])


  return (
    <>
      <h2>PRODUCTOS</h2>
      <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer