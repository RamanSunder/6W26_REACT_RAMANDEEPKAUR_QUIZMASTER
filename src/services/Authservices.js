import { signOut } from "firebase/auth"
import { auth } from "../firebase/firebaseConfig"

class Authservices{
    async setData(data){

        console.log("Data Called", data)
        localStorage.setItem('id',data.id)
        localStorage.setItem('email',data.email)
        localStorage.setItem('name',data.name)
        localStorage.setItem('userType',data.userType)
        localStorage.setItem('token',data.token)
        localStorage.setItem('institutionId',data.institutionId)
        localStorage.setItem('islogin',true)
        console.log(localStorage)
        console.log(localStorage.getItem("institutionId"))
    }

    getEmail(){
        return localStorage.getItem('email')
    }

    getUser(){
        return localStorage.getItem("userType")
    }

    logout(){
        localStorage.clear()
        sessionStorage.clear()
        signOut(auth)
    }
    

}
export default new Authservices()