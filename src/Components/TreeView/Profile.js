import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import EditTreeForm from '../EditTreeForm'

const Profile = (props) => {
  async function deleteTree(treeId) {
    await fetch(`http://localhost:5000/Inventory/${treeId}/delete`, {
      method: "DELETE"
    })
  }

  return (
    <Container>
      <img
        className='rounded mt-5'
        width='50%'
        alt='Your Bonsai Tree'
        src={props.data.Image}
      />
      <div className='font-weight-bold h3'>{props.data.Name}</div>
      <div className='text-black-50'>{props.data.Species}</div>
      {/* <EditTreeForm /> */}
      {/* <Link to='edit'>
        <Button variant='primary'>Edit Tree</Button>
      </Link> */}
      <Link to='/Inventory'>
      <Button variant='danger' onClick={()=>{deleteTree(props.data._id)}}>Delete Tree</Button>
      </Link>
    </Container>
  )
}

export default Profile
