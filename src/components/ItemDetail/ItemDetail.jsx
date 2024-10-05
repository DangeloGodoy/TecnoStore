import { Typography } from "@material-tailwind/react";
import ItemCount from "../ItemCount/ItemCount"
import LoadImg from "../LoadItem/LoadImg"

function ItemDetail({ item }) {
    const PlaceholderText = () => (
        <span className="inline-block mb-4 h-3 w-56 rounded-full bg-gray-300">&nbsp;</span>
    )

    return (
        <div className="mx-auto container grid place-items-center grid-cols-1 md:grid-cols-2">
            {item.image ? (
                <img src={item.image} alt={item.title} className="h-[36rem]" />
            ) : (<LoadImg />)}
            <div>
                <Typography className="mb-4" variant="h3">
                    {item.title || <PlaceholderText />}
                </Typography>
                <Typography variant="h5">
                    {item.price ? `$${item.price}` : <PlaceholderText />}
                </Typography>
                <Typography className="!mt-4 text-base font-normal leading-[27px] !text-gray-500">
                    {item.description || <PlaceholderText />}
                </Typography>
                <div className="my-8 flex-col items-center gap-3">
                    <Typography className="!text-base font-bold !text-gray-900">
                        Customer appreciation
                    </Typography>
                    <Typography className="!text-sm font-bold !text-gray-700">
                        {item?.rating?.rate ? `${item.rating.rate}/5` : <PlaceholderText />}
                        ({item?.rating?.count || <PlaceholderText />} reviews)
                    </Typography>
                </div>
                <Typography color="blue-gray" variant="h6">
                    Count Products
                </Typography>
                <ItemCount  itemDetail={ item }/>
            </div>
        </div>
    )
}

export default ItemDetail