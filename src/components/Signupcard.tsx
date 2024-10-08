import React from "react";

export default function Signupcard(){
    return(
        <form action="#" className="flex flex-col items-center w-96 border-2 border-mid rounded-3xl p-6">
            <input className="bg-gray-200 rounded border-spacing-1 px-2 py-1 my-6 w-3/5" type="text" name="username" id="username" placeholder="Username"/>
            <input className="bg-gray-200 rounded border-spacing-1 px-2 py-1 my-6 w-3/5"type="email"  name="email" id="email" placeholder="Enter email address"/>
            <input className="bg-gray-200 rounded border-spacing-1 px-2 py-1 my-6 w-3/5" type="password" name="password" id="password" placeholder="Password"/>
            <input className="bg-gray-200 rounded border-spacing-1 px-2 py-1 my-6 w-3/5" type="password" name="re-password" id="re-password" placeholder="Re-enter Password"/>
            <input className="py-2 px-6 rounded-3xl text-base font-medium bg-mid text-white" type="button" value="Signup" />
        </form>
    )
}