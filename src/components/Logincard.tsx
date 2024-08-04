import React, {useRef} from "react";

import { userAuth } from "../services/userAuth";
import { useNavigate } from "react-router-dom";

export default function Logincard(){

    let loginUsernameRef = useRef<HTMLInputElement>(null)
    let loginPassRef = useRef<HTMLInputElement>(null)
    let navigate = useNavigate()

    const loginHandler = () => {

        let res = userAuth(
            loginUsernameRef.current?.value || '',
            loginPassRef.current?.value || ''
        )

        if(res.result){
            navigate('/home')
        }else{
            navigate('/')
        }

    }

    return (
        <form action="#" className="flex flex-col items-center w-96 border-2 border-mid rounded-3xl p-6">
            <input className="bg-gray-200 rounded border-spacing-1 px-2 py-1 my-6 w-3/5" type="text" name="login-username" id="login-username" ref={loginUsernameRef} placeholder="Username"/>
            <input className="bg-gray-200 rounded border-spacing-1 px-2 py-1 my-6 w-3/5" type="password" name="login-password" id="login-password" ref={loginPassRef} placeholder="Password"/>
            <input className="py-2 px-6 rounded-3xl text-base font-medium bg-mid text-white" type="button" value="Login" onClick={loginHandler}/>
        </form>
    )
}