import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Form, Button } from "react-bootstrap"

const EventPage = (props) => {
  const [ event, setEvent ] = useState({})
  const [comments, setComments] = useState([])
  const [commentText, setCommentText] = useState('')

  let { id } = useParams()

  const getEvents = async () => {
      const query = await fetch( `/api/event/${id}`)
      const dbEventData = await query.json()
      console.log(dbEventData);
      setEvent(dbEventData)
      setComments(dbEventData.comments)
    }

  const handleCommentText = (e) => {
    setCommentText(e.target.value)
  }

    const submitComment = async (e) => {
      e.preventDefault()
      console.log(commentText);
      const response = await fetch(`/api/event/${id}/comment`, {
        method: 'POST',
        body: JSON.stringify({
          commentBody: commentText,
          author: 'author for test'
        }),
        headers: { 'Content-Type': 'application/json'}
      })

      if (response.ok) {
        
        alert('successfully commented')
        return  
      }
      alert('there was an error sending your comment')
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
            <p class="comment">{comment.commentBody}</p>
          </div>
        ))}
      </div>
      {/* conditionally render comment form if logged in */}
      <Form onSubmit={submitComment}>
      <Form.Group controlId="commentBody">
          <Form.Label>Leave a comment</Form.Label>
          <Form.Control
            name="commentBody"
            as="textarea"
            value={commentText}
            onChange={handleCommentText}
          />
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>
    </main>
  )
}

export default EventPage
