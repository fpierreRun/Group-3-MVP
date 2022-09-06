import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import LoginForm from "../components/LoginForm"
import Signup from './Signup'

const LoginPage = (props) => {
  return (
    <>
    <LoginForm></LoginForm>
    </>
  )
}

export default LoginPage