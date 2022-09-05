import Calendar from 'react-calendar'
import { Form, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'

const HomePage = (props) => {

  const [date, setDate] = useState(new Date())
  const [state, setState] = useState("")
  const [events, setEvents] = useState([])
  const [chosenEvents, setChosenEvents] = useState([])

  function selectDate (nextValue) {
    setDate(nextValue)

    console.log(date, state);
  }

  function selectState(e) {
    setState(e.target.value)

  }

  const getEvents = async () => {
    const query = await fetch( `/api/event/`)
    const dbEventData = await query.json()
    console.log(dbEventData);
    setEvents(dbEventData)
  }

  const displayEvents = async () => {

    const filteredEvents = await events.filter( function(el) {
      return el.state === state
    })

    await setChosenEvents(filteredEvents)

    console.log(chosenEvents);
  }

  useEffect( ()=> {
    getEvents()
  }, [])


  return (
    <main className='text-center'>
      <h1>Browse events by day and location</h1>
      <div className='row justify-content-around m-4'>
        <Calendar
          onChange={selectDate}
          value={date}
          calendarType={'US'}
          view={'month'}
          className='col-4'
        />
      </div>
      <Form.Select name="state" value={state} onChange={selectState}>
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
      <Button onClick={displayEvents}>Show Events!</Button>
        {chosenEvents.map(displayedEvent => (
          <a key={displayedEvent._id} href={'/event/' + displayedEvent._id}>{displayedEvent.title}</a>
        ))}
    </main>
  )
}

export default HomePage