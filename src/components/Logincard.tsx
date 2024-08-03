import React from "react";

export default function Logincard(){
    return (
        <form action="#" className="flex flex-col items-center w-96 border border-mid border-2 rounded-3xl p-6">
            <input className="bg-gray-200 rounded border-spacing-1 px-2 py-1 my-6 w-3/5" type="text" name="login-username" id="login-username" placeholder="Username"/>
            <input className="bg-gray-200 rounded border-spacing-1 px-2 py-1 my-6 w-3/5" type="password" name="login-password" id="login-password" placeholder="Password"/>
            <input className="py-2 px-6 rounded-3xl text-base font-medium bg-mid text-white" type="button" value="Login" />
        </form>
    )
}