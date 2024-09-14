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
    /* <Item item={itemProps}/> */
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

/* <div className="flex flex-wrap gap-4 justify-around pt-2">
            {items.map((item) => (
                <Card key={item.id} className="w-96">
                    <CardHeader shadow={false} floated={false} className="h-96">
                        <img
                            src={item.category.image}
                            alt="card-image"
                            className="h-full w-full object-cover"
                        />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-2 flex items-center justify-between">
                            <Typography color="blue-gray" className="font-medium">{item.title}</Typography>
                            <Typography color="blue-gray" className="font-medium">$ {item.price}</Typography>
                        </div>
                        <Typography variant="small" color="gray" className="font-normal opacity-75">{item.description}</Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button  ripple={false} fullWidth={true} className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100">
                            More Info
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div> */