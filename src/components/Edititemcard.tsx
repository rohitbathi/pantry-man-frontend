import React, { useRef } from "react";

import { Item } from "../routes/userhomepage";

interface editItemCardProps {
    items: Item[],
    setItems: React.Dispatch<React.SetStateAction<Item[]>>,
    editItem: Item | undefined
}

const EditItemCard = ({
    items,
    setItems,
    editItem
}: editItemCardProps) => {

    let itemNameRef = useRef<HTMLInputElement>(null)
    let expDateRef = useRef<HTMLInputElement>(null)
    let presentUnitsRef = useRef<HTMLInputElement>(null)
    let maxUnitsRef = useRef<HTMLInputElement>(null)

    const saveEdit = ()=>{
        let newItems = items.map((item)=>{
            if(editItem && item.itemId==editItem.itemId){
                return {
                    ...item,
                    itemName: itemNameRef.current?.value ? itemNameRef.current?.value : editItem.itemName,
                    expDate: expDateRef.current?.value ? new Date(String(expDateRef.current?.value).replace(/-/g, '/')) : editItem.expDate,
                    presentUnits: presentUnitsRef.current?.value ? parseInt(presentUnitsRef.current?.value) : editItem.presentUnits,
                    maxUnits: maxUnitsRef.current?.value ? parseInt(maxUnitsRef.current?.value) : editItem.maxUnits,
                    editStatus: false
                }
                console.log((new Date(String(expDateRef.current?.value).replace(/-/g, '/'))))
            }
            return item
        })

        setItems(newItems)
    }

    if(editItem){
        return (
            <div className="w-52 h-52 p-4 bg-blue-400 flex flex-col justify-around" >
                <div>
                    <input type="text" name="item-name" id="item-name" placeholder={editItem.itemName} ref={itemNameRef}/>
                    <label>Expiry Date: </label><input type="date" name="expiry-date" id="expiry-date" placeholder={editItem.expDate?.toDateString()} ref={expDateRef}/>
                    <input type="number" name="current-units" id="current-units" placeholder={editItem.presentUnits ? editItem.presentUnits.toString() + ' (Present units)' : String(0) + ' (Present units)'} ref={presentUnitsRef}/>
                    <input type="number" name="max-units" id="max-units" placeholder={editItem.maxUnits ? editItem.maxUnits.toString() + ' (Max units)' : String(0) + ' (Max units)'} ref={maxUnitsRef}/>
                </div>
                <button
                    onClick={saveEdit}
                    className="border border-cyan-700 text-cyan-700 mb-1">
                    Save
                </button>
            </div>
        )
    }
    return <div></div>
}

export default EditItemCard