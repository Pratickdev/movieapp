import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from './redux/LoginSlice'
import { useNavigate } from 'react-router-dom'
export default function Logout() {
    const dispath = useDispatch();
    const nevigate = useNavigate();
    useEffect(()=>{
        dispath(logout());
        localStorage.setItem('login', "");
        nevigate("/");
    },[])
  return (
    <div>Loading .....</div>
  )
}
