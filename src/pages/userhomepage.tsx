import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'

import Appname from "../components/Appname";
import Itemcard from "../components/Itemcard";
import Itemdetailsform from "../components/Itemdetailsform";
import EditItemCard from "../components/Edititemcard";

export interface Item{
    editStatus: boolean
    itemId: string,
    itemName: string | undefined,
    expDate: Date | undefined,
    presentUnits: number | undefined,
    maxUnits: number | undefined
}

export const genUID = ()=>{
    let uId = uuidv4()
    return uId.slice(0,6)
}

export default function Userhome(){

    let [items, setItems] = useState<Item[]>([
        {
            editStatus: false,
            itemId: genUID(),
            itemName: 'Paper rolls',
            expDate: new Date('12/23/2025'),
            presentUnits: 2,
            maxUnits: 5
        },
        {
            editStatus: false,
            itemId: genUID(),
            itemName: 'Paper rolls',
            expDate: new Date('12/23/2025'),
            presentUnits: 2,
            maxUnits: 5
        },
        {
            editStatus: false,
            itemId: genUID(),
            itemName: 'Paper rolls',
            expDate: new Date('12/23/2025'),
            presentUnits: 2,
            maxUnits: 5
        }
    ])
    let [editItem, setEditItem] = useState<Item|null>(null)
    let [showItemForm, setShowItemForm] = useState<boolean>(false)

    const addButtonHandler = ()=>{
        if(showItemForm){
            setShowItemForm(false)
        }else{
            setShowItemForm(true)
        }
    }
    
    return(
        <div className="page">
            <nav 
            className="flex w-full justify-between mb-6 pb-4 bg-white shadow-2xl shadow-mid ">
                <Appname />
                <div className="flex justify-between items-center h-26 mr-6 mt-3 w-24">
                    <p>Logs</p>
                    <p>Profile</p>
                </div>
            </nav>
            <button
            id="addItemBtn"
            onClick={addButtonHandler}
            className={
                showItemForm ?
                "text-5xl font-light w-16 h-16 pb-2 rounded-2xl bg-red-600 ml-[20%] mt-9 text-white shadow-lg shadow-red-600 rotate-45"
                :"text-5xl font-light w-16 h-16 pb-2 rounded-2xl bg-customdark ml-9 mt-9 text-white shadow-lg shadow-gray-500"
                }>
                    +
                </button>
            {
                !showItemForm && 
                <div className="w-fit h-fit p-6 m-auto grid grid-cols-4 grid-flow-row gap-4">
                    {
                        items.map((item)=>{
                            if(!item.editStatus){
                                return (
                                    <Itemcard
                                        key={item.itemId}
                                        currItem={item}
                                        items={items}
                                        editItem={editItem}
                                        setItems={setItems}
                                        setEditItem={setEditItem}
                                    /> 
                                )
                            }else{
                                return(
                                    <EditItemCard 
                                        key={item.itemId}
                                        items= {items}
                                        setItems={setItems}
                                        editItem= {editItem}
                                        setEditItem= {setEditItem}
                                    />
                                )
                            }
                        })
                    }
                </div>
            }
            {
                showItemForm &&
                <Itemdetailsform
                    items={items}
                    setItems={setItems}
                    setShowItemForm={setShowItemForm}
                />
            }
        </div>
    )
}