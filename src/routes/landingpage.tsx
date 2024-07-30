import React from "react";

import Appname from "../components/Appname";
import Logincard from "../components/Logincard";
import Signupcard from "../components/Signupcard";

export default function Landingpage(){
    return (
        <div className="page">
            <nav className="mb-4">
                <Appname />
            </nav>
            <Logincard />
            <Signupcard />
        </div>
    )
}
