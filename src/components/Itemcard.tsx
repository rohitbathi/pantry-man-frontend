import React from "react"

import { Item } from "../pages/userhomepage"

interface itemCardProps {
    currItem: Item
    items: Item[],
    editItem: Item | null,
    setItems: React.Dispatch<React.SetStateAction<Item[]>>,
    setEditItem: React.Dispatch<React.SetStateAction<Item | null>>
}

export default function Itemcard(
    {
        currItem,
        items,
        editItem, 
        setItems,
        setEditItem
    }: itemCardProps){

    const deleteHandler = (event:React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault()
        // console.log(items.filter((item)=>item.itemId!==itemId))
        setItems(items.filter((item)=>currItem.itemId!==item.itemId))
    }
    
    const editHandler = ()=>{
        if(!editItem){
            setEditItem(currItem)
            setItems(items.map((item)=>{
                if(item.itemId==currItem.itemId){
                    return{...item, editStatus:true}
                }
                return item
            }))
        }else{
            return
        }
    }

    return (
        <div 
        className="p-4 flex flex-col justify-around font-poppins shadow-2xl shadow-customdark rounded-lg border border-mid" >
            <div>
                <p 
                className="text-2xl font-medium">
                    {currItem.itemName}
                </p>
                <table id="item-features"
                className="table-auto border-separate border-spacing-5">
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="expiry-date"
                                className="text-customdark">
                                    Expiry date
                                </label>
                            </td>
                            <td id="expiry-date"
                            className="font-medium">
                                {currItem.expDate?.toDateString()}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor=""
                                className="text-customdark">
                                    Units
                                </label>
                            </td>
                            <td
                            className="font-medium">
                                {currItem.presentUnits ? currItem.presentUnits.toString() : 0}/{currItem.maxUnits ? currItem.maxUnits.toString() : 0}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="button-holder"
            className="flex justify-around">
                <button
                onClick={editHandler}
                className="border border-cyan-700 text-cyan-700 mb-1 hover:bg-cyan-700 hover:text-white min-w-28">
                    Edit
                </button>
                <button
                onClick={deleteHandler}
                className="border border-red-500 text-red-500 mb-1 hover:bg-red-500 hover:text-white min-w-28">
                    Delete
                </button>
            </div>
        </div>
    )
}