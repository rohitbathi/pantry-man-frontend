import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

const AppLayout: React.FC = ()=>{
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </>
    )
}

export default AppLayout