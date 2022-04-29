import Container from 'react-bootstrap/Container'

const Profile = (props) => {

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

    </Container>
  )
}

export default Profile
