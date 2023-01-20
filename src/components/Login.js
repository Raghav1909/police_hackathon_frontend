import { Card, TextField, Button, Box} from '@mui/material'
import React, {useState,useContext} from 'react'
import { LoadingButton } from '@mui/lab'
import {ALERT} from '../utils/Alerts'
import {toast} from 'react-toastify'
import LoginIcon from '@mui/icons-material/Login'
import AuthContext from '../context/AuthContext'

const style = {
  loginCard: {
    width: '50%',
    padding: '1em',
    borderRadius: '1em',
  },
  main:{
    textAlign: 'center',
  }
}

//const delay = ms => new Promise(res => setTimeout(res, ms))

const Login = () => {
  let {login} = useContext(AuthContext)
  
  const handleClick = async() =>{
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    
    if(email === '' || password === ''){
      toast.warn('Please enter all the fields', ALERT)
      return
    }

    setLoading(true)
    await login(email, password)
    setLoading(false)

  }

  const [loading, setLoading] = useState(false)

  return (
    <Card style = {style.loginCard} elevation = {12}>
      <div style = {style.main}><h1>Police Database Login</h1></div>
      <TextField
        id = 'email'
        label = 'Email' 
        variant = 'outlined' 
        type = 'email'
        fullWidth
        sx = {{margin: '1em 0'}}
        />
      <TextField
        id = 'password' 
        label = 'Password' 
        variant = 'outlined'
        type = 'password' 
        fullWidth
        sx = {{marginBottom: '1em'}}/>
        <Box textAlign = 'center'>
          {/* <Button
            variant = 'contained'
            onClick = {() => handleClick()}
            endIcon = {<LoginIcon/>}>
              Login</Button> */}
            <LoadingButton
          onClick={handleClick}
          endIcon={<LoginIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          <span>Login</span>
        </LoadingButton>
        </Box>
    </Card>
  )
}

export default Login