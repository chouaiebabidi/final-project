import React from 'react'
import Map from './Map'
import home from "./home.png"
import phone from "./phone.png"
import mail from "./mail.png"
import net from "./net.png"

function Contact() {
    return (
        <div>
            <div className='contact-us-page'>
                <h1>Contact Us</h1>
            </div>
            <div className='map-map'>
                <Map />
            </div>
            <div className='forms-contact'>

                <div className='form-1 formss'>
                    <h4 style={{color:"#999090"}}>Say Hello To Us</h4>
                    <hr style={{color:"black"}}/>
                    <form>
                    <input type="text" placeholder='name'/>
                    <hr/>
                    <input type="email" placeholder='email'/>
                    <hr/>
                    <input type="text" placeholder='subject'/>
                    <hr/>
                    <input style={{height:"103px"}} type="text" placeholder='your text here'/>
                    </form>
                    <button>Send</button>
                </div>
                <div className='form-2 formss'>
                    <h4>Contact Us</h4>
                    <hr style={{color:"black"}}/>
                    <div className='form-items'>
                    <span><img src={home}/>3100 C/A Mouchak, Laredo, Texas, USA</span>
                    <span> <img src={phone}/>+1 999-333-4444</span>
                    <span> <img src={mail}/>query@yourdomain.com</span>
                    <span> <img src={net}/>http://www.yourdomain.com</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact