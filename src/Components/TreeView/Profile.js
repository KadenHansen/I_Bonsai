import { React, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

const Profile = (props) => {
  const link = `edit`
  const btnDel = `/Inventory`
  async function deleteTree(treeId) {
    await fetch(`http://localhost:5000/Inventory/${treeId}/delete`, {
      method: "DELETE"
    });
  
    // const newRecords = records.filter((el) => el._id !== id);
    // setRecords(newRecords);
  }

  return (
    <Container>
      <img
        className='rounded mt-5'
        width='150px'
        alt='Your Bonsai Tree'
        src='https://www.thespruce.com/thmb/0AJv8AfVaT09o4oLhofX_WR_d-Y=/3024x3022/filters:no_upscale():max_bytes(150000):strip_icc()/Bonsai-Juniper-Tree_GettyImages-1191078639-c86fffdd513648b6b2ee0d658710bc7d.jpg'
      />
      <div className='font-weight-bold'>{props.data.Name}</div>
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
