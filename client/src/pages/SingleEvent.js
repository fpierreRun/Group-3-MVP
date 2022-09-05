import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const EventPage = (props) => {
  const [ event, setEvent ] = useState({})

  let { id } = useParams()

  const getEvents = async () => {
      const query = await fetch( `/api/event/${id}`)
      const dbEventData = await query.json()
      console.log(dbEventData);
      setEvent(dbEventData)
    }

  useEffect( ()=> {
    getEvents()
  }, [])

  return (
    <div className="text-center">
      <h1>{event.title}</h1>
      <h3>{event.date} in {event.state}</h3>
      <p>{event.description}</p>
    </div>
  )
}

export default EventPage