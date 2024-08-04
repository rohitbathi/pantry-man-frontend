import React, { useState, useRef } from "react";

import { genUID, Item } from "../pages/userhomepage";

interface itemDetailsFormProps{
    items: Item[],
    itemDetails?: Item,
    setItems: React.Dispatch<React.SetStateAction<Item[]>>,
    setShowItemForm: React.Dispatch<React.SetStateAction<boolean>>,
}

const Itemdetailsform= (
    {
        items,
        setItems, 
        setShowItemForm,
    }: itemDetailsFormProps) => {

        let itemNameRef = useRef<HTMLInputElement>(null)
        let expDateRef = useRef<HTMLInputElement>(null)
        let presentUnitsRef = useRef<HTMLInputElement>(null)
        let maxUnitsRef = useRef<HTMLInputElement>(null)

    const addHandler = () => {

        setItems([
            ...items,
            {
                editStatus: false,
                itemId: genUID(),
                itemName: itemNameRef.current? itemNameRef.current.value : undefined,
                expDate: expDateRef.current ? new Date(expDateRef.current.value) : undefined,
                presentUnits: presentUnitsRef.current ? parseInt(presentUnitsRef.current.value) : 0,
                maxUnits: maxUnitsRef.current ? parseInt(maxUnitsRef.current.value) : 0
            }
        ])
        setShowItemForm(false)
    } 

    return(
        <form action="#"
         className="max-w-[42%] m-auto p-6 border-2 border-customdark rounded-lg font-poppins">
            <input type="text" name="item-name" id="item-name" placeholder="Item name" ref={itemNameRef}
            className="w-2/3 p-2 mb-7 border border-customdark rounded-md text-lg"/>
            <table
            className="table-auto m-auto border-separate border-spacing-5">
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="">Expiry date</label>
                        </td>
                        <td>
                            <input type="date" name="expiry-date" id="expiry-date" ref={expDateRef}
                            className=""/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="">Current units</label>
                        </td>
                        <td>
                            <input type="number" name="current-units" id="current-units" placeholder="Current units" ref={presentUnitsRef}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="">Maximum units</label>
                        </td>
                        <td>
                            <input type="number" name="max-units" id="max-units" placeholder="Maximum units" ref={maxUnitsRef}/>
                        </td>
                    </tr>
                </tbody>
            </table>
            <input type="button" value="Add" onClick={addHandler} 
            className="m-auto px-4 py-1 bg-mid text-white rounded-3xl"/>
        </form>
    )
}

export default Itemdetailsform