import { Error } from "../layouts/AppLayout"
import { genUID } from "../pages/userhomepage"

const isUsernameValid = (username: string|undefined)=>{
    const nameRegex = /^[a-zA-Z0-9_]+$/
    if(username){
        if(nameRegex.test(username)){
            return {res:true, msg:'Username valid'}
        }else{
            return {res:false, msg:'Username can only have lowercase, uppercase letters, digits and underscore'}
        }
    }
    return {res: false, msg:'Username cannot be empty'}
}

const isPasswordValid = (password: string|undefined)=>{
    let errorList: Error[] | undefined = []
    const passRegex = /^[a-zA-Z0-9!@#$%&]+$/
    if(password){
        if(password.length>=8 && password.length<=16){
            if(passRegex.test(password)){
                return {
                    res: true,
                    msg: 'Account password matched'
                }
            }else{
                errorList.push({
                    errorId: genUID(),
                    error: 'Password must have alphanumeric characters and !@#$%& special characters'
                })
            }
        }else{
            errorList.push({
                errorId: genUID(),
                error: 'Password must be between 8 and 16 characters in length'
            })
        }
        return {
            res: false,
            errors: errorList
        }
    }

    errorList.push({
        errorId: genUID(),
        error: 'Password cannot be empty'
    })
    return {
        res: false,
        errors: errorList
    }
}

export { isUsernameValid, isPasswordValid }