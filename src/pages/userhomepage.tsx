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
        }
    ])
    let [editItem, setEditItem] = useState<Item>()
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
             className="text-5xl font-light w-16 h-16 pb-2 rounded-2xl bg-customdark ml-9 mt-9 text-white">
                +
            </button>
            {
                !showItemForm && 
                <div className="w-10/12 h-fit p-6 m-auto grid grid-cols-4 grid-flow-row gap-4">
                    {
                        items.map((item)=>{
                            if(!item.editStatus){
                                return (
                                    <Itemcard
                                        key={item.itemId}
                                        currItem={item}
                                        items={items}
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