import React, { useState, useEffect } from 'react'
import { Form, Button, Alert, Container } from 'react-bootstrap'
import Cookie from 'js-cookie'



const SignupForm = () => {

  const [signupFormData, setsignupFormData] = useState({firstName: '', lastName: '', username: '', email: '', password: ''})
  const [ formMessage, setFormMessage ] = useState({ type: "", msg: "" })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setsignupFormData({ ...signupFormData, [name]: value})
  }

  const handleSignup = async (event) => {
    event.preventDefault()
    const response = await fetch('/api/user', {
      method: 'POST',
      headers: { 'Content-Type':'application/json'},
      body: JSON.stringify(signupFormData)
    })
    if (response.ok) {
      setsignupFormData({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
      })
    }
    console.log(signupFormData)

  }

  return (
    <Container>
      <Form onSubmit={handleSignup}>
        <Form.Group>
          <Form.Label htmlFor='firstName'>First Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your First Name'
            name='firstName'
            onChange={handleInputChange}
            value={signupFormData.firstName}
            required />
          <Form.Control.Feedback type='invalid'>
            First Name is Required...
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='lastName'>Last Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your Last Name'
            name='lastName'
            onChange={handleInputChange}
            value={signupFormData.lastName}
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
            value={signupFormData.username}
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
            value={signupFormData.email}
            required />
          <Form.Control.Feedback type='invalid'>
            Email is also Required...
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your Password'
            name='password'
            onChange={handleInputChange}
            value={signupFormData.password}
            required />
          <Form.Control.Feedback type='invalid'>
            Password is Necessary!
          </Form.Control.Feedback>
        </Form.Group>

        <Button 
          disabled={
            !(
              signupFormData.firstName &&
              signupFormData.lastName &&
              signupFormData.username &&
              signupFormData.email &&
              signupFormData.password
            )
          }
          type='submit'
          variant='success' >
            Submit
        </Button>
      </Form>

      {formMessage.msg.length > 0 && (
        <Alert variant={formMessage.type}>
          { formMessage.msg }
        </Alert>
      )}
    </Container>
  )
}



export default SignupForm