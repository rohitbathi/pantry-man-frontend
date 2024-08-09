import React, { Suspense, useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";

import ErrorNotice from "../components/ErrorNotice";
import { genUID } from "../pages/userhomepage";

export interface Error{
    errorId: string,
    error: string | undefined
}

type ErrorsType = { 
    errors: Error[] | undefined, 
    setErrors: React.Dispatch<React.SetStateAction<Error[] | undefined>> 
}

const AppLayout: React.FC = ()=>{

    let [errors, setErrors] = useState<Error[] | undefined>(undefined)

    return (
        <>
            <div id="errors-container"
            className="absolute mt-4 ml-[40vw] w-[20vw]">
                {
                    errors && errors.length > 0 &&
                    errors.map((error)=>{
                        return <ErrorNotice 
                        currError={error} 
                        errors={errors} 
                        setErrors= {setErrors} 
                        key={error.errorId}/>
                    })
                }
                {/* <ErrorNotice error='Enter Correct name'/> */}
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet 
                context={{errors, setErrors} satisfies ErrorsType}/>
            </Suspense>
        </>
    )
}

export default AppLayout

export const useError = ()=>{
    return useOutletContext<ErrorsType>()
}