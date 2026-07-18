import Adminheader from "./Adminheader"
import Adminfooter from "./Adminfooter"
import { Outlet, useNavigate } from "react-router-dom"
import { useEffect} from "react";
import { toast } from "react-toastify";
import Authservices from "../../../services/Authservices";
export default function Adminlayout(){
    const nav = useNavigate()
    function getUserEmail(){
    const res = Authservices.getEmail()
    return res;
  }

  function getUserType(){
    const res = Authservices.getUser()
    return res;
  }

  useEffect(()=>{
    const userType = getUserType()
    const email = getUserEmail()
    if(userType !== 'admin' || email == null){
      toast.error("Unauthorised")
      nav('/')
    }
  })

    return(
        <>
        <Adminheader></Adminheader>
        <Outlet></Outlet>
        <Adminfooter></Adminfooter>
        </>
    )
}