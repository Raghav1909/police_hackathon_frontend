import React,{useContext} from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

function PrivateRoutes() {
    let {user} = useContext(AuthContext)
    
    return (
        user? <Outlet/> : <Navigate to = '/'/>
    )
}

export default PrivateRoutes