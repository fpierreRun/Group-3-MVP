import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import LOGIN_USER from '../utils/API'
import Auth from '../utils/API'

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: ''})
  const [validated] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUserFormData({ ...userFormData, [name]: value})
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }


    setUserFormData({
      email: '',
      password: '',
    })
  }

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Form.Group>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your Email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required />
          <Form.Control.Feedback type='invalid'>
            An Email is required to continue
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your Password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required />
          <Form.Control.Feedback type='invalid'>
            Password is required to continue.
          </Form.Control.Feedback>
        </Form.Group>

        <Button 
        disabled={!(userFormData.email && userFormData.password)}
        type='submit'
        variant='success'>
          Submit
        </Button>
      </Form>
    </>
  )
}

export default LoginForm