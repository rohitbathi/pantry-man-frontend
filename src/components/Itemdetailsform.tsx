import React from "react";

import { genUID, Item } from "../routes/userhomepage";

interface itemDetailsFormProps{
    items: Item[],
    showItemForm: boolean,
    itemDetails: Item,
    setItems: React.Dispatch<React.SetStateAction<Item[]>>,
    setShowItemForm: React.Dispatch<React.SetStateAction<boolean>>,
    setItemDetails: React.Dispatch<React.SetStateAction<Item | undefined>>
}

const Itemdetailsform= ({items, showItemForm, itemDetails, setItems, setShowItemForm, setItemDetails}: itemDetailsFormProps)=>{

    const addHandler = ()=>{
        setItems([
            ...items,
            {
                itemId: genUID(),
                itemName: 'Paper rolls',
                expDate: '12/23/2025',
                presentUnits: 2,
                maxUnits: 5
            }
        ])
        setShowItemForm(false)
    } 

    return(
        <form action="#"
         className="bg-amber-700 flex flex-col items-center">
            <input type="text" name="item-name" id="item-name" placeholder="Item name" />
            <input type="date" name="expiry-date" id="expiry-date" />
            <input type="number" name="current-units" id="current-units" placeholder="Current units" />
            <input type="number" name="max-units" id="max-units" placeholder="Maximum units" />
            <input type="button" value="Add" onClick={addHandler}/>
        </form>
    )
}

export default Itemdetailsform