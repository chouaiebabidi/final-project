import React from 'react'
import pcImg from "./pc.png"
import phone from "./phonerep.png"
import laptop from "./laptop.png"
import tablet from "./tablet.png"
import Modale from './Modale'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Services({ping, setping}) {
    const navigate = useNavigate()
    return (
        <div>
            <div style={{ width: "100%" }}>
                <h1 style={{ display: "flex", justifyContent: "center", color: "black", marginTop: "50px" }}>Our Repair Services</h1>
                <p style={{ display: "flex", justifyContent: "center", color: "black", marginTop: "20px", width: "68%", marginLeft: "224px" }}>Any kinds of digital device problem you need fixed. We can help! Check out our digital device repair services to find more information of what exactly we provide and if it suites your needs.</p>
            </div>

            <div>

            </div>

            <div className='box'>
                <div className='box-cadre'>

                    <div className='title'>
                        <img src={pcImg} />
                        <h6>REPAIR COMPUTER</h6>
                        <p>Our helpful, friendly and A+ Certified Technicians are ready to take care of your valuable Computer</p>
                        <Button onClick={() => navigate("/modale")}>Order</Button>
                    </div>

                </div>
                <div className='box-cadre'>

                    <div className='title'>
                        <img src={phone} />
                        <h6>REPAIR MOBILE</h6>
                        <p>We repair all brands of mobile phone with 100% customer satisfaction and we offer 90 day warranty</p>
                        <Button onClick={() => navigate("/modale")}>Order</Button>
                    </div>

                </div>
                <div className='box-cadre'>

                    <div className='title'>
                        <img src={laptop} />
                        <h6>REPAIR LAPTOP</h6>
                        <p>We can fix all types of laptops issues within shortest time and ensure your repair goes smoothly</p>
                        <Button onClick={() => navigate("/modale")}>Order</Button>
                    </div>

                </div>
                <div className='box-cadre'>
                    <img src={tablet} />
                    <div className='title'>
                        <h6>REPAIR TABLET</h6>
                        <p>You can get highest quality repair services on any brand tablet. Bring it for a free diagnostic</p>
                        <Button onClick={() => navigate("/modale")}>Order</Button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Services