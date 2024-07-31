import React, { useState, useRef } from "react";

import { genUID, Item } from "../routes/userhomepage";

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
        console.log(items);
        
        setShowItemForm(false)
    } 

    return(
        <form action="#"
         className="bg-amber-700 flex flex-col items-center">
            <input type="text" name="item-name" id="item-name" placeholder="Item name" ref={itemNameRef}/>
            <input type="date" name="expiry-date" id="expiry-date" ref={expDateRef}/>
            <input type="number" name="current-units" id="current-units" placeholder="Current units" ref={presentUnitsRef}/>
            <input type="number" name="max-units" id="max-units" placeholder="Maximum units" ref={maxUnitsRef}/>
            <input type="button" value="Add" onClick={addHandler} />
        </form>
    )
}

export default Itemdetailsform