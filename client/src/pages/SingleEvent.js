import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Form, Button } from "react-bootstrap"

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
          <div key={comment._id}>
            <h5>{comment.author}</h5>
            <p>{comment.commentBody}</p>
          </div>
        ))}
      </div>
      {/* conditionally render comment form if logged in */}
      <Form>
      <Form.Group controlId="commentBody">
          <Form.Label>Leave a comment</Form.Label>
          <Form.Control
            name="commentBody"
            as="textarea"
            // value={}
            // onChange={}
          />
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>
    </main>
  )
}

export default EventPage