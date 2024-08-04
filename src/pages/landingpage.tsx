import React, {useRef, useState} from "react";

import Appname from "../components/Appname";
import Logincard from "../components/Logincard";
import Signupcard from "../components/Signupcard";

export default function Landingpage(){ 

    let [signupBtn, setSignupBtn] = useState<boolean>(false)
    
    const signupBtnInactive = ()=>{
        setSignupBtn(false)
    }
    const signupBtnActive = ()=>{
        setSignupBtn(true)
    }

    return (
        <div className="page">
            <nav 
            className="mb-20 shadow-2xl shadow-mid pb-3">
                <Appname />
            </nav>
            <div id="reg-wrapper"
            className="w-6/12 m-auto flex flex-col  items-center shadow-2xl shadow-mid p-9">
                <div id="form-switcher"
                className="bg-gray-200 max-w-fit rounded-3xl flex justify-around shadow-md mb-8">
                    <div id="slider"></div>
                    <button
                    id="login"
                    className={`py-2 px-6 rounded-3xl text-base font-medium ${signupBtn?'':'bg-mid text-white'}`}
                    onClick={signupBtnInactive}>
                        Login
                    </button>
                    <button
                    id="sign-up"
                    className={`py-2 px-6 rounded-3xl text-base font-medium ${signupBtn?'bg-mid text-white':''}`}
                    onClick={signupBtnActive}>
                        Signup
                    </button>
                </div>
                <div id="form-wrapper"
                className="block w-fit">
                    {signupBtn?<Signupcard />:<Logincard />}
                </div>
            </div>
        </div>
    )
}
