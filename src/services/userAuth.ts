const dummyUsers = [
    {
        username: 'test123',
        password: 'test123'
    }
]

export const userAuth = (username: string, password: string)=>{
    let [res] = dummyUsers.map((user)=>{
        if(username && user.username==username){
            if(password && user.password==password){
                return {result: true, message: 'user found'}
            }else{
                return {result: false, message: 'password incorrect'}
            }
        }
        return {result: false, message: 'user not found'}
    })
    console.log(res);
    
    return res
}