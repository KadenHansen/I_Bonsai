import { React, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

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
