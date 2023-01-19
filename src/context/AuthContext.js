import { createContext,useState, useEffect } from "react"
import jwt_decode from 'jwt-decode'
import { useNavigate } from "react-router-dom"

const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({children}) => {
    let [authTokens, setAuthTokens] = useState(null)
    let [user, setUser] = useState(null)
    
    const navigate = useNavigate()

    let login = async (e) => {
        
        e.preventDefault()

        let response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/`,{
            method: 'POST',
            body: new URLSearchParams(
                {
                    'username': e.target.email.value,
                    'password': e.target.password.value
                }
            )
        })

        
        let data = await response.json()

        if(response.status === 200){
            const decode = jwt_decode(data.access_token)
            setAuthTokens(data)
            setUser(decode)
            localStorage.setItem('authTokens', JSON.stringify(data))
            navigate(`/u/${decode.username}`)
        }else{
            alert(`Error: ${response.status}`)
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

