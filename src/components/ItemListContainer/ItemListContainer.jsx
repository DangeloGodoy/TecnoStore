import { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import Item from '../Item/Item'

function ItemListContainer({ textProps }) {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className="flex flex-wrap gap-4 justify-around pt-2">
            {items.map((itemProps) => (
                <Card key={itemProps.id} className="w-96"> 
                    <Item item={itemProps}/ >
                </Card>
            ))}
        </div>
    )
}

export default ItemListContainer