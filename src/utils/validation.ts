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

export { isUsernameValid }