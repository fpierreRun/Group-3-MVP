import React, { useState, useEffect } from 'react';
import { Form, Button, Alert, Container } from 'react-bootstrap';
import Cookie from 'js-cookie'

const LoginForm = () => {
  const [loginCreds, setloginCreds] = useState('')
  const [ formMessage, setFormMessage ] = useState({ type: "", msg: "" })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setloginCreds({ ...loginCreds, [name]: value})
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    const authCheck = await fetch('/api/user/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginCreds)
    })
    const authResult = await authCheck.json()

    if( authResult.result === 'success' ) {
      Cookie.set('auth-token', authResult.token)
      setFormMessage({ type: 'success', msg: 'Your Login was Successful! Enjoy!'})
    } else {
      setFormMessage({ type: 'danger', msg: 'Your credentials are invalid. Please try again.'})
    }
    setloginCreds({ email: '', password: '' })
  }

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            name='email'
            placeholder='Enter Your Email'
            value={ loginCreds.email }
            onchange={handleInputChange}
            />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            name='password'
            placeholder='Enter Your Password'
            value={ loginCreds.password }
            onchange={handleInputChange}
            />
        </Form.Group>

        <Button disabled={!(loginCreds.email && loginCreds.password)} variant='primary' type='submit'>Login!</Button>
      </Form>

      {formMessage.msg.length > 0 && (
        <Alert variant={formMessage.type}>
          { formMessage.msg }
        </Alert>
      )}
    </Container>
  )
}

export default LoginForm