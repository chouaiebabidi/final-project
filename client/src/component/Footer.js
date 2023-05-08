import React from 'react'
import pro from "./pro.png"
import fcb from "./facebook.png"
import yt from "./youtube.png"
import wts from "./whatsapp.png"
import insta from "./instagram.png"

const Footer = () => {
    return (
        <div className='footer-end'>
            {/* <div className='footer-left'> */}
            <> {/* <img src='https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2017/01/logo-footer.png' />
                    <p>Restore is a U.S based computer repair service center. Basically we repair all major brands of PCs, Laptops, Smartphone, Tablet, Flash Drive and Gaming Console devices issues.</p>
                    <hr color='grey' />
                    <ul className='icons'>
                        <li><img src={fcb} /></li>
                        <li><img src={insta} /></li>
                        <li><img src={wts} /></li>
                        <li><img src={yt} /></li>
                    </ul>
                </div> 
                <div className='footer-middle'>

</div> */}</>

            <div className="footer-box1 footer-box">
            <img src='https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2017/01/logo-footer.png' />
                    <p>Restore is a U.S based computer repair service center. Basically we repair all major brands of PCs, Laptops, Smartphone, Tablet, Flash Drive and Gaming Console devices issues.</p>
                    <hr color='grey' />
                    <ul className='icons'>
                        <li><img src={fcb} /></li>
                        <li><img src={insta} /></li>
                        <li><img src={wts} /></li>
                        <li><img src={yt} /></li>
                    </ul>
            </div>

            <div className="footer-box2 footer-box">
            <div className='delivery-addresses'>
    <h6 style={{fontSize:"13px"}}>Shop Info</h6>
    <div className='addy'>Address: </div>
    <div className='addy-info'> 965 East Avenu, Sector 9 Russel Squire, UK</div>
    <hr/>
    <div className='addy'>Phone: </div>
    <div className='addy-info'> (+1)755-650-5212</div>
    <div className='addy'>Email: </div>
    <div className='addy-info' style={{color:"orange"}}> info@codeecstasy.com</div>
    <hr/>
    <div className='addy'>Hours: </div>
    <div className='addy-info'> Mon - Fri (9am - 6pm)</div>
    </div>
            </div>

            <div className="footer-box3 footer-box">
                <h4 style={{display:"flex", justifyContent:"center"}}>Services</h4>
            <span className='btn'>Laptop Repair</span>  
            <span className='btn'>iPhone Repair</span> 
            <span className='btn'>iPad Repair</span> 
            <span className='btn'>Tablet Repair</span> 
            <span className='btn'> Smartphone Repair</span>
            <span className='btn'>Gadget Repair</span> 
            <span className='btn'>Recover Data</span>
            <span className='btn'>Backup Data</span>
            </div>

            <div className="footer-box4 footer-box">
            <h4>Newsletter</h4>
            <p>Signup for regular newsletter and stay upto date with our latest news</p>
            <input type="email" name="EMAIL" placeholder="Your email address" required=""></input>
            <button id="mc-submit" type="submit"> <i class="fa fa-chevron-right"></i> </button>
            </div>
            {/* </div> */}
        </div>
    )
}

export default Footer