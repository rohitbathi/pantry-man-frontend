import React from "react";

import { Error } from "../layouts/AppLayout";

const ErrorNotice: React.FC<{currError: Error, errors: Error[]|undefined, setErrors: React.Dispatch<React.SetStateAction<Error[] | undefined>>}> = ({currError, errors, setErrors}) => {

    const deleteNotice = () =>{
        setErrors(
            errors?.filter((error)=> error.errorId!=currError.errorId)
        )
    }

    return (
        <div id="error-notice"
        className="w-full h-fit bg-light text-red-600 mb-3 px-3 pb-2 rounded-md border border-red-600">
            <button
            className="ml-[98%]"
            onClick={deleteNotice}>
                x
            </button>
            <p
            className="place-items-center">
                {currError.error}
            </p>
        </div>
    )
}

export default ErrorNotice

// airbnb standards for eslint