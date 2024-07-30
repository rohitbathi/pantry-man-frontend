import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'

import Appname from "../components/Appname";
import Itemcard from "../components/Itemcard";
import Itemdetailsform from "../components/Itemdetailsform";

export interface Item{
    itemId: string,
    itemName: string,
    expDate: string,
    presentUnits: Number,
    maxUnits: Number
}

export const genUID = ()=>{
    let uId = uuidv4()
    return uId.slice(0,6) 
}

export default function Userhome(){

    let [items, setItems] = useState<Item[]>([
        {
            itemId: genUID(),
            itemName: 'Paper rolls',
            expDate: '12/23/2025',
            presentUnits: 2,
            maxUnits: 5
        },
        {
            itemId: genUID(),
            itemName: 'Paper rolls',
            expDate: '12/23/2025',
            presentUnits: 2,
            maxUnits: 5
        },
        {
            itemId: genUID(),
            itemName: 'Paper rolls',
            expDate: '12/23/2025',
            presentUnits: 2,
            maxUnits: 5
        },
        {
            itemId: genUID(),
            itemName: 'Paper rolls',
            expDate: '12/23/2025',
            presentUnits: 2,
            maxUnits: 5
        },
        {
            itemId: genUID(),
            itemName: 'Paper rolls',
            expDate: '12/23/2025',
            presentUnits: 2,
            maxUnits: 5
        },
    ])
    let [itemDetails, setItemDetails] = useState<Item>()
    let [showItemForm, setShowItemForm] = useState<boolean>(false)

    const addButtonHandler = ()=>{
        setShowItemForm(true)
    }
    
    return(
        <div className="page">
            <nav className="flex w-full justify-between mb-6">
                <Appname />
                <div className="flex justify-between items-center h-26 mr-6 mt-3 w-24">
                    <p>Logs</p>
                    <p>Profile</p>
                </div>
            </nav>
            <button
            onClick={addButtonHandler}
             className="text-5xl font-light w-16 h-16 border border-black rounded-full bg-orange-200 ml-7 mt-9">
                +
            </button>
            {
                !showItemForm && 
                <div className="w-10/12 h-fit p-6 m-auto bg-slate-600 grid grid-cols-4 grid-flow-row gap-4">
                    {
                        items.map((item)=>(
                            <Itemcard
                                key={item.itemId}
                                itemId={item.itemId}
                                itemName={item.itemName}  
                                expDate={new Date(item.expDate)}
                                presentUnits={item.presentUnits}
                                maxUnits={item.maxUnits}
                                items={items}
                                setItems={setItems}
                            />
                        ))
                    }
                </div>
            }
            {
                showItemForm &&
                <Itemdetailsform
                    items={items}
                    showItemForm={showItemForm}
                    setItems={setItems}
                    setShowItemForm={setShowItemForm}
                    itemDetails={itemDetails}
                    setItemDetails={setItemDetails}
                />
            }
        </div>
    )
}