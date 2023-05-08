import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addcommande } from '../JS/commandeSlice';
import Swal from 'sweetalert2'
import { Navigate } from 'react-router-dom';

function Modale({ ping, setping }) {
  const user = useSelector((state) => state.user?.user);
  const [newcommande, setnewcommande] = useState({

    name: user?.name,
    email: user?.email,
    numtel: "",
    problem: ""

  })
  const dispatch = useDispatch();
  return (
    <div className='div-modale'>
      <h1 style={{ color: "black", display: "flex", justifyContent: "center" }}>Fill the form</h1>
      <div className='form-modale'>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={user?.name}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={user?.email}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Numéro Tel</Form.Label>
            <Form.Control
              type="text"
              placeholder="name@example.com"
              autoFocus
              onChange={(e) => setnewcommande({ ...newcommande, numtel: e.target.value })}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Explain your problem</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={(e) => setnewcommande({ ...newcommande, problem: e.target.value })} />
            <Button style={{ marginTop: "15px" }} onClick={() => {
              dispatch(addcommande(newcommande)); setping(!ping); Swal.fire(
                'Thank you!',
                'Your request has been sent, we will contact you as soon as possible',

              ); Navigate("/")
            }}>Submit</Button>
          </Form.Group>
        </Form>
      </div>

    </div>
  )
}

export default Modale