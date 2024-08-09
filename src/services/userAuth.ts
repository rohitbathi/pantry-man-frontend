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
                return {result: true, message: 'User found'}
            }else{
                return {result: false, message: 'Password incorrect'}
            }
        }
        return {result: false, message: 'Username not found'}
    })
    console.log(res);
    
    return res
}