import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import LoginForm from "../components/LoginForm"
import SignupPage from './Signup'
import { Container } from "react-bootstrap"

const LoginPage = (props) => {
  return (
    <>
    <LoginForm></LoginForm>
    </>
  )
}

export default LoginPage