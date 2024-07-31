import React from "react"

import { Item } from "../routes/userhomepage"

interface itemCardProps {
    currItem: Item
    items: Item[],
    setItems: React.Dispatch<React.SetStateAction<Item[]>>,
    setEditItem: React.Dispatch<React.SetStateAction<Item | undefined>>
}

export default function Itemcard(
    {
        currItem,
        items, 
        setItems,
        setEditItem
    }: itemCardProps){

    const deleteHandler = (event:React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault()
        // console.log(items.filter((item)=>item.itemId!==itemId))
        setItems(items.filter((item)=>currItem.itemId!==item.itemId))
    }
    
    const editHandler = ()=>{
        setEditItem(currItem)
        setItems(items.map((item)=>{
            if(item.itemId==currItem.itemId){
                return{...item, editStatus:true}
            }
            return item
        }))
    }

    return (
        <div className="w-52 h-52 p-4 bg-orange-300 flex flex-col justify-around" >
            <div>
                <p>{currItem.itemId}</p>
                <p><b>{currItem.itemName}</b></p>
                <p>Expiry date: <b>{currItem.expDate?.toDateString()}</b></p>
                <p>Units: <b>{currItem.presentUnits ? currItem.presentUnits.toString() : 0}/{currItem.maxUnits ? currItem.maxUnits.toString() : 0}</b></p>
            </div>
            <button
            onClick={editHandler}
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