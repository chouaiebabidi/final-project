import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { userCurrent, updateuser, logout } from "../JS/userSlice/userSlice";
import "./style/profil.css";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import { deletecommande } from "../JS/commandeSlice";


function Profil({ ping, setping }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user?.user);

  const [newuser, setnewuser] = useState({});
  const commandes = useSelector((state) => state.commande?.commandeList)
  return (
    <section style={{ backgroundColor: '#E9DAC1' }}>

      <MDBContainer className="py-5" >
        <MDBRow>
          <MDBCol lg="4" style={{ width: "183px" }}>
            <MDBCard className="mb-4" style={{ backgroundColor: "#434242", color: "#F3EFE0" }}>
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">{user?.name}</p>
                <p className="text-muted mb-4">{user?.email}</p>
                {user ? <Button onClick={() => { dispatch(logout()); navigate("/login") }}>LogOut</Button> : null}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol style={{ marginTop: "10px" }}>
            <div className="col-md-5 border-right" style={{ backgroundColor: "#434242", width: "100%", marginBottom: "10px", marginTop: "-10px" }}>
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="labels">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="first name"
                      defaultValue={user?.name}
                      onChange={(e) => {
                        setnewuser({ ...newuser, name: e.target.value });
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Surname</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={user?.lastName}
                      placeholder="surname"
                      onChange={(e) => {
                        setnewuser({ ...newuser, lastName: e.target.value });
                      }}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Email ID</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter email id"
                      defaultValue={user?.email}
                      onChange={(e) => {
                        setnewuser({ ...newuser, email: e.target.value });
                      }}
                    />
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <button
                    style={{
                      backgroundColor: "#573b8a",
                      border: "none",
                      color: "white",
                    }}
                    className="btn btn-primary profile-button"
                    type="button"
                    onClick={() => {
                      setTimeout(() => {
                        dispatch(updateuser({ id: user._id, newuser }));
                        setping(!ping)


                      }, 1000);
                    }}
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <div>
            <h1 style={{display:"flex", justifyContent:"center", marginTop:"10px", marginBottom:"30px" , color:"black"}}>Orders</h1>
            <Table striped bordered hover>
              <thead className="trth-list">
                <tr>

                  <th>First Name</th>
                  <th>Email</th>
                  <th>Number phone</th>
                  <th>Problem</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {commandes.filter((el) => el.name == user?.name).map((el) => <tr>
                  <td>{el?.name}</td>
                  <td>{el?.email}</td>
                  <td>{el?.numtel}</td>
                  <td>{el?.problem}</td>
                  <td><button className="button-deletee" onClick={() => { dispatch(deletecommande(el._id)); setping(!ping) }}>X</button></td>
                </tr>)}

              </tbody>
            </Table>
          </div>

        </MDBRow>

      </MDBContainer>
    </section>
  );
}

export default Profil;



