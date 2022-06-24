import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import {Link} from 'react-router-dom'

const Profile = (props) => {
  const link = `edit`
  const btnDel = `/Inventory`
  async function deleteTree(treeId) {
    await fetch(`https://i-bonsai-server.herokuapp.com/${treeId}/delete`, {
      method: "DELETE"
    });
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
      <Link to={link}>
        <Button variant='primary'>Edit Tree</Button>
      </Link>
      <Link to={btnDel}>
      <Button variant='danger' onClick={()=>{
        deleteTree(props.data._id)
      }}>Delete Tree
      </Button>
      </Link>

    </Container>
  )
}

export default Profile
