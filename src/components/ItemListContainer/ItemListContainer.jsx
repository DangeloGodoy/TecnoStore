import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { Card } from "@material-tailwind/react"
import { getProducts, getProductByCategory } from "../../firebase/db";
import Item from '../Item/Item'

function ItemListContainer({ textProps }) {
    const [items, setItems] = useState([])
    const { nameCategory } = useParams()
    useEffect(() => {
        nameCategory ? getProductByCategory(nameCategory, setItems) : getProducts(setItems)
    }, [nameCategory])
    
    return (
        <div className="flex flex-wrap gap-4 justify-around pt-2">
            {items.map((itemProps) => (
                <Card key={itemProps.id} className="w-96">
                    <Item item={itemProps} />
                </Card>
            ))}
        </div>
    )
}

export default ItemListContainer