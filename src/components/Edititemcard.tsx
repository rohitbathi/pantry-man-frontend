import React, { useRef } from "react";

import { Item } from "../pages/userhomepage";

interface editItemCardProps {
    items: Item[],
    setItems: React.Dispatch<React.SetStateAction<Item[]>>,
    editItem: Item | null,
    setEditItem: React.Dispatch<React.SetStateAction<Item | null>>
}

const EditItemCard = ({
    items,
    setItems,
    editItem,
    setEditItem
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
            }
            return item
        })
        setItems(newItems)
        setEditItem(null)
    }

    if(editItem){
        return (
            <div className="p-4 flex flex-col justify-around font-poppins rounded-lg border-4 border-cyan-700 shadow-lg shadow-cyan-700" >
                <div>
                    <input type="text" name="item-name" id="item-name" placeholder={editItem.itemName} ref={itemNameRef}
                    className="text-2xl border border-customdark rounded-lg px-2 py-1"/>
                    <table id="edit-item-features"
                    className="table-auto border-separate border-spacing-5">
                        <tbody>
                            <tr>
                                <td>
                                    <label>Expiry Date: </label>
                                </td>
                                <td>
                                    <input type="date" name="expiry-date" id="expiry-date" placeholder={editItem.expDate?.toDateString()} ref={expDateRef}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="">
                                        Present units
                                    </label>
                                </td>
                                <td>
                                    <input type="number" name="current-units" id="current-units" placeholder={editItem.presentUnits ? editItem.presentUnits.toString() + ' (Present units)' : String(0) + ' (Present units)'} ref={presentUnitsRef}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="">
                                        Maximum units
                                    </label>
                                </td>
                                <td>
                                    <input type="number" name="max-units" id="max-units" placeholder={editItem.maxUnits ? editItem.maxUnits.toString() + ' (Max units)' : String(0) + ' (Max units)'} ref={maxUnitsRef}/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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