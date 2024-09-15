import { CardHeader, CardBody, CardFooter, Typography, Button, } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function Item({ item }) {
    return (
        <>
            <CardHeader shadow={false} floated={false} className="h-96">
                <img src={item?.image} alt="card-image" className="h-full w-full object-contain" />
            </CardHeader>
            <CardBody>
                <div className="mb-2 flex-col items-center justify-between">
                    <Typography color="blue-gray" className="font-normal">{item?.title}</Typography>
                    <Typography color="blue-gray" className="font-bold">$ {item?.price}</Typography>
                </div>
                <Typography variant="small" color="gray" className="font-normal opacity-75">{item?.description}</Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Link to={`/product/${item.id}`}>
                    <Button ripple={false} fullWidth={true} className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105">
                        More Info
                    </Button>
                </Link>
            </CardFooter>
        </>
    );
}

export default Item;