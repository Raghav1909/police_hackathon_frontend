import React from 'react'
import Login from '../../components/Login'
import { COLORS } from '../../utils/Colors'

const style = {
  main:{
    display: 'flex',
  },
  left: {
    backgroundColor: COLORS.lightBlue,
    width: '50%'
  },
  right: {
    backgroundColor: COLORS.grey,
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

const LoginPage = () => {
  
  return (
    <div style = {style.main}>
      <div style = {style.left}></div>
      <div style = {style.right}>
        <Login/>
      </div>
    </div>
  )
}

export default LoginPage