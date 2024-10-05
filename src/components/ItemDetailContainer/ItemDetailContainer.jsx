import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../../firebase/db";
import ItemDetail from "../ItemDetail/ItemDetail"

function ItemDetailContainer() {
  const { id } = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    getProductsById(id, setProduct)
  }, [id])
  return (
    <section className="py-16 px-8">
      <ItemDetail item={product} />
    </section>
  );
}

export default ItemDetailContainer;