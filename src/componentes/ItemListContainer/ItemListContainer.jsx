import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { db } from "../../services/Config"
import { collection, getDocs, query, where } from "firebase/firestore"

import { useParams } from "react-router-dom"
import Loader from "../loader/loader"

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(false)

  const { idCategoria } = useParams()

  useEffect(() => {
    setLoading(true)
    const misProductos = idCategoria ? query(collection(db, "Productos"), where("idCat", "==", idCategoria)) : collection(db, "Productos")

    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setProductos(nuevosProductos)
      })
      .catch(error => console.log(error))
      .finally(() => {
        setLoading(false)
      })
  }, [idCategoria])


  return (
    <>
      <h2>VESTIDOS</h2>

      {loading ? <Loader/> : <ItemList productos={productos}/> }
      
    </>
  )
}

export default ItemListContainer