import React, { useState, useEffect } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'



import Auth from '../utils/auth'

const SignupForm = () => {

  const [userFormData, setUserFormData] = useState('')

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
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: ''
    })
  }

  return (
    <>
    <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
      <Form.Group>
        <Form.Label htmlFor='firstname'>First Name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Your First Name'
          name='firstname'
          onChange={handleInputChange}
          value={userFormData.firstname}
          required />
        <Form.Control.Feedback type='invalid'>
          First Name is Required...
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor='lastname'>Last Name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Your Last Name'
          name='lastname'
          onChange={handleInputChange}
          value={userFormData.lastname}
          required />
        <Form.Control.Feedback type='invalid'>
          Last Name is Required...
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor='username'>Username</Form.Label>
        <Form.Control
          type='text'
          placeholder='Your Username'
          name='username'
          onChange={handleInputChange}
          value={userFormData.username}
          required />
        <Form.Control.Feedback type='invalid'>
          Username is Required...
        </Form.Control.Feedback>
      </Form.Group>

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
          Email is also Required...
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor='password'>Password</Form.Label>
        <Form.Control
          type='text'
          placeholder='Your Password'
          name='password'
          onChange={handleInputChange}
          value={userFormData.password}
          required />
        <Form.Control.Feedback type='invalid'>
          Password is Necessary!
        </Form.Control.Feedback>
      </Form.Group>

      <Button 
        disabled={
          !(
            userFormData.firstname &&
            userFormData.lastname &&
            userFormData.username &&
            userFormData.email &&
            userFormData.password
          )
        }
        type='submit'
        variant='success' >
          Submit
      </Button>
    </Form>
    </>
  )
}



export default SignupForm