import EventForm from "../components/EventForm"

const CreateEventPage = (props) => {
  
  return (
    <div  className="text-center">
      <h2>Submit a new event</h2>
      <h3>Select a day</h3>
      <EventForm />
    </div>
  )
}

export default CreateEventPage