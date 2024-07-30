import React from "react"

import { Item } from "../routes/userhomepage"
import { log } from "console"

interface itemCardProps {
    itemId: string,
    itemName: string,
    expDate?: Date, 
    presentUnits: Number, 
    maxUnits: Number,
    items: Item[],
    setItems: React.Dispatch<React.SetStateAction<Item[]>>
}

export default function Itemcard({itemId, itemName, expDate, presentUnits, maxUnits, items, setItems}: itemCardProps){

    const deleteHandler = (event:React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault()
        console.log(items.filter((item)=>item.itemId!==itemId))
        setItems(items.filter((item)=>item.itemId!==itemId))
    }

    return (
        <div className="w-52 h-52 p-4 bg-orange-300 flex flex-col justify-around" >
            <div>
                <p>{itemId}</p>
                <p><b>{itemName}</b></p>
                <p>Expiry date: <b>{expDate?.toDateString()}</b></p>
                <p>Units: <b>{presentUnits.toString()}/{maxUnits.toString()}</b></p>
            </div>
            <button
            // onClick={deleteHandler}
             className="border border-cyan-700 text-cyan-700 mb-1">
                Edit
            </button>
            <button
            onClick={deleteHandler}
             className="border border-red-500 text-red-500 mb-1">
                Delete
            </button>
        </div>
    )
}