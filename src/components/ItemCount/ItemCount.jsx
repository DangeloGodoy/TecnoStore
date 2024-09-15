import { Button, ButtonGroup, Chip } from "@material-tailwind/react";
import { useState } from "react";

function ItemCount() {
    const [count, setCount] = useState(0)
    const countAdd = () => setCount(count + 1)
    const countRest = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    return (
        <div className="flex-col">
            <div className="my-8 mt-3 flex items-center gap-2">
                <ButtonGroup>
                    <Button onClick={countRest}>-</Button>
                    <Chip value={count} />
                    <Button onClick={countAdd}>+</Button>
                </ButtonGroup>
            </div>
            <div className="mb-4 flex w-full items-center gap-3 md:w-1/2 ">
                <Button color="gray" className="w-52">
                    Add to Cart
                </Button>
            </div>
        </div>
    )
}

export default ItemCount