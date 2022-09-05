import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const EventPage = (props) => {
  const [ event, setEvent ] = useState({})
  const [comments, setComments] = useState([])

  let { id } = useParams()

  const getEvents = async () => {
      const query = await fetch( `/api/event/${id}`)
      const dbEventData = await query.json()
      console.log(dbEventData);
      setEvent(dbEventData)
      setComments(dbEventData.comments)
    }

  useEffect( ()=> {
    getEvents()
  }, [])

  return (
    <main className="text-center">
      <h1>{event.title}</h1>
      <h3>{event.date} in {event.state}</h3>
      <p>{event.description}</p>
      <div>
        <h3>Comments</h3>
        {comments.map(comment => (
          <div>
            <h5>{comment.author}</h5>
            <p>{comment.commentBody}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default EventPage