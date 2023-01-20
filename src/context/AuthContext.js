import { createContext,useState, useEffect } from "react"
import jwt_decode from 'jwt-decode'
import { useNavigate } from "react-router-dom"

import {ALERT} from '../utils/Alerts'
import {toast} from 'react-toastify'
import axios from 'axios'


const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({children}) => {
    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(JSON.parse(localStorage.getItem('authTokens')).access_token) : null)
    
    const navigate = useNavigate()

    let login = async(email, password) => {
        let formData = new FormData()
        formData.append('username', email)
        formData.append('password', password)
        let response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth`,formData,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })

        let data = response.data

        if(response.status === 200){
            const decode = jwt_decode(data.access_token)
            setAuthTokens(data)
            setUser(decode)
            localStorage.setItem('authTokens', JSON.stringify(data))
            navigate(`/u/${decode.username}`)
        }else{
            toast.error(`${response.status}: ${response.statusText}`, ALERT)
        }
        
    }
    
    let logout = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate('/')
    }

    let contextData = {
        user:user,
        authTokens:authTokens,
        login:login,
        logout: logout,
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}

