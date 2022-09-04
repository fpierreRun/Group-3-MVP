import React from "react";
import { Form, Button } from "react-bootstrap"
import Calendar from "react-calendar";

class EventForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      date: new Date(),
      state: '',
      description: '',
      author: 'test'
    };

    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleStateChange = this.handleStateChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value })
  }

  handleDateChange(e) {
    this.setState({ date: e })
  }
  handleStateChange(e) {
    this.setState({ state: e.target.value })
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value })
  }

  async handleSubmit(e) {
    e.preventDefault()
    // console.log(this.state)
    const event = this.state;

    const response = await fetch('http://localhost:3001/api/event', {
      method: 'POST',
      body: JSON.stringify(event),
      headers: { 'Content-Type': 'application/json'}
    })

    if (response.ok) {
      this.setState({
        title: '',
        date: new Date(),
        state: '',
        description: ''
      })
      alert('successfully created event')
      return  
    }
    alert('there was an error creating your event')
  }

  render() {
    return (
      <>
      <Form onSubmit={this.handleSubmit} method="post">
        <div className='row justify-content-around m-4'>
          <Calendar
            onChange={this.handleDateChange}
            value={this.state.date}
            calendarType={'US'}
            view={'month'}
            className='col-4'
          />
        </div>

        <Form.Group controlId="title">
          <Form.Label>Event Title</Form.Label>
          <Form.Control
            name="title"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
        </Form.Group>

        <Form.Group controlId="state">
        <Form.Label>Select a state</Form.Label>
          <Form.Select name="title" value={this.state.state} onChange={this.handleStateChange}>
            <option value="">-- Please Select a State --</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">Dist of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Enter your event's description</Form.Label>
          <Form.Control
            name="description"
            as="textarea"
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          />
        </Form.Group>

        <Button type="submit">Submit</Button>

      </Form>
      </>
    )
  }
}

export default EventForm