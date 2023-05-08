import React from 'react'
import { Carousel } from 'react-bootstrap';
import pro from "./pro.png"
import fcb from "./facebook.png"
import yt from "./youtube.png"
import wts from "./whatsapp.png"
import insta from "./instagram.png"

function Home() {
    return (
        <div>
            <Carousel >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/home_1_slider_1-e1527970919620.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Camputer Repair</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/home_1_slider_2-e1527970968543.jpg"
                        alt="Second slide"
                    />

                    {/*  <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
            <div className='boxcarousel'>
                <div className='boxc'>
                    <h1 style={{ display: "flex", justifyContent: "center", color: "black", marginTop: "20px" }}>Fast Repair Service</h1>
                    <div style={{ width: "66%" }}>
                        <p style={{ display: "flex", justifyContent: "flex-end", color: "#1c1313", marginTop: "20px" }}>Just send your valuable Laptop, PC, Mobile, Gaming Device or Smartphone and we'll take care of it.</p>
                    </div>
                </div>
            </div>
            <div style={{ width: "100%" }}>
                <h1 style={{ display: "flex", justifyContent: "center", color: "black", marginTop: "50px" }}>Our Repair Services</h1>
                <p style={{ display: "flex", justifyContent: "center", color: "black", marginTop: "20px", width: "68%", marginLeft: "224px" }}>Any kinds of digital device problem you need fixed. We can help! Check out our digital device repair services to find more information of what exactly we provide and if it suites your needs.</p>
            </div>

            <div>

            </div>

            <div className='box'>
                <div className='box-cadre'>
                    <div className='photo'>
                        <img src='https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/pc_06.jpg' />
                    </div>
                    <div className='title'>
                        <h3>REPAIR COMPUTER</h3>
                        <p>Our helpful, friendly and A+ Certified Technicians are ready to take care of your valuable Computer</p>
                    </div>

                </div>
                <div className='box-cadre'>
                    <div className='photo'>
                        <img src='https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/pc_06.jpg' />
                    </div>
                    <div className='title'>
                        <h3>REPAIR COMPUTER</h3>
                        <p>Our helpful, friendly and A+ Certified Technicians are ready to take care of your valuable Computer</p>
                    </div>

                </div>
                <div className='box-cadre'>
                    <div className='photo'>
                        <img src='https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/pc_06.jpg' />
                    </div>
                    <div className='title'>
                        <h3>REPAIR COMPUTER</h3>
                        <p>Our helpful, friendly and A+ Certified Technicians are ready to take care of your valuable Computer</p>
                    </div>

                </div>
                <div className='box-cadre'>
                    <div className='photo'>
                        <img src='https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/pc_06.jpg' />
                    </div>
                    <div className='title'>
                        <h3>REPAIR COMPUTER</h3>
                        <p>Our helpful, friendly and A+ Certified Technicians are ready to take care of your valuable Computer</p>
                    </div>

                </div>

            </div>




            {/* <div className='border-repair'>
    <div className='div-box-2'>
       <img src='https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/pc_06.jpg'/>
        <div style={{width:"300px"}}>
        <h3>REPAIR COMPUTER</h3>
        <p>Our helpful, friendly and A+ Certified Technicians are ready to take care of your valuable Computer</p>
    </div></div>
    <div className='div-box-2'>
        <img src='https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/pc_06.jpg'/>
        <h3>REPAIR COMPUTER</h3>
        <p>Our helpful, friendly and A+ Certified Technicians are ready to take care of your valuable Computer</p>
    </div>
    <div className='div-box-2'>
        <img src='https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/pc_06.jpg'/>
        <h3>REPAIR COMPUTER</h3>
        <p>Our helpful, friendly and A+ Certified Technicians are ready to take care of your valuable Computer</p>
    </div>
    <div className='div-box-2'>
        <img src='https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/pc_06.jpg'/>
        <h3>REPAIR COMPUTER</h3>
        <p>Our helpful, friendly and A+ Certified Technicians are ready to take care of your valuable Computer</p>
    </div>
    </div> */}
            <div style={{ marginTop: "60px" }}>
                <hr style={{ color: "black" }} />
            </div>
            <div className='experiance-box'>
                <div className='image-box'>
                    <img src={pro} />
                </div>
                <div className='experiance-text'>
                    <div className='number'>
                        <span class="number-years">22</span>
                        <h3>YEARS OF EXPERIENCE IN DIGITAL DEVICE REPAIR SERVICES</h3>
                    </div>
                    <p style={{ color: "#2e2828e3" }}>Restore is a U.S based computer repair service center. Basically we repair all major brands of PCs, Laptops, Smartphone, Tablet and Gaming console devices issues. We provide the services by well trained, skillful and friendly stuff. Our skill have been tested over the years.
                        We’re not only here to fix your device but also make sure you are informed and comfortable with the whole process. We’ll keep you updated and you feel comfortable with our services.</p>
                    <h3>CALL US TO GET FREE QUOTES</h3>
                    <div className='call-us'>
                        <h5>123-456-789</h5>
                        <h5>24/7 Mon-Fri</h5>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: "50px" }}>
                <h1 style={{ color: "black", display: "flex", justifyContent: "center" }}>Our Awesome Team</h1>
                <p style={{ color: "grey", display: "flex", justifyContent: "center" }}>Meet with our qualified and expert team. We are specialized in our individual field. We have enough skill and tested. That’s why you’re getting the quality repair services.</p>
            </div>
            <div className='our-agents'>
                <div className='agent'>
                    <img src="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_6.jpg" data-src="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_6.jpg" class="attachment-full size-full ls-is-cached lazyloaded" alt="" decoding="async" data-srcset="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_6.jpg 520w, https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_6-300x300.jpg 300w, https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_6-100x100.jpg 100w, https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_6-150x150.jpg 150w, https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_6-430x430.jpg 430w" data-sizes="(max-width: 520px) 100vw, 520px" sizes="(max-width: 520px) 100vw, 520px" srcset="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_6.jpg 520w, https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_6-300x300.jpg 300w, https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_6-100x100.jpg 100w, https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_6-150x150.jpg 150w, https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_6-430x430.jpg 430w" />
                    <h6 style={{ color: "black", display: "flex", justifyContent: "center" }}>Alexender Gary</h6>
                    <span style={{ color: "grey", display: "flex", justifyContent: "center" }}>CEO & Founder</span>
                    <ul className='icons'>
                        <li><img src={fcb} /></li>
                        <li><img src={insta} /></li>
                        <li><img src={wts} /></li>
                        <li><img src={yt} /></li>
                    </ul>
                </div>
                <div className='agent'>
                    <img src="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_7-1.jpg" data-src="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_7-1.jpg" class="attachment-full size-full lazyloaded" alt="Team" decoding="async" data-srcset="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_7-1.jpg 520w, https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_7-1-300x300.jpg 300w, https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_7-1-100x100.jpg 100w, https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_7-1-150x150.jpg 150w, https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_7-1-430x430.jpg 430w" data-sizes="(max-width: 520px) 100vw, 520px" sizes="(max-width: 520px) 100vw, 520px" srcset="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_7-1.jpg 520w, https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_7-1-300x300.jpg 300w, https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_7-1-100x100.jpg 100w, https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_7-1-150x150.jpg 150w, https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_7-1-430x430.jpg 430w" />
                    <h6 style={{ color: "black", display: "flex", justifyContent: "center" }}>Mellissa Munoz</h6>
                    <span style={{ color: "grey", display: "flex", justifyContent: "center" }}>Chief Engineer</span>
                    <ul className='icons'>
                        <li><img src={fcb} /></li>
                        <li><img src={insta} /></li>
                        <li><img src={wts} /></li>
                        <li><img src={yt} /></li>
                    </ul>
                </div>
                <div className='agent'>
                    <img src="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_8.jpg" data-src="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_8.jpg" class="attachment-full size-full lazyloaded" alt="Team" decoding="async" data-srcset="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_8.jpg 520w, https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_8-300x300.jpg 300w, https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_8-100x100.jpg 100w, https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_8-150x150.jpg 150w, https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_8-430x430.jpg 430w" data-sizes="(max-width: 520px) 100vw, 520px" sizes="(max-width: 520px) 100vw, 520px" srcset="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_8.jpg 520w, https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_8-300x300.jpg 300w, https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_8-100x100.jpg 100w, https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_8-150x150.jpg 150w, https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_8-430x430.jpg 430w" />
                    <h6 style={{ color: "black", display: "flex", justifyContent: "center" }}>John Abraham</h6>
                    <span style={{ color: "grey", display: "flex", justifyContent: "center" }}>Technical Manager</span>
                    <ul className='icons'>
                        <li><img src={fcb} /></li>
                        <li><img src={insta} /></li>
                        <li><img src={wts} /></li>
                        <li><img src={yt} /></li>
                    </ul>
                </div>
                <div className='agent'>
                    <img src="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_9.jpg" data-src="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_9.jpg" class="attachment-full size-full lazyloaded" alt="Team" decoding="async" data-srcset="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_9.jpg 520w, https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_9-300x300.jpg 300w, https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_9-100x100.jpg 100w, https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_9-150x150.jpg 150w, https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_9-430x430.jpg 430w" data-sizes="(max-width: 520px) 100vw, 520px" sizes="(max-width: 520px) 100vw, 520px" srcset="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_9.jpg 520w, https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_9-300x300.jpg 300w, https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_9-100x100.jpg 100w, https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_9-150x150.jpg 150w, https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_9-430x430.jpg 430w" />
                    <h6 style={{ color: "black", display: "flex", justifyContent: "center" }}>Alexender Gary</h6>
                    <span style={{ color: "grey", display: "flex", justifyContent: "center" }}>CEO & Founder</span>
                    <ul className='icons'>
                        <li><img src={fcb} /></li>
                        <li><img src={insta} /></li>
                        <li><img src={wts} /></li>
                        <li><img src={yt} /></li>
                    </ul>
                </div>
            </div>

            <div className='stat'>
                <div className='stat-content'>
                    <h1>Our Statistics</h1>
                    <p>We’re experienced and award winning repair company. We’ve successfully fixed thousands of computer device over the last couple of years with our customer satisfaction.</p>
                </div>
                <div className='stat-numbers'>
                    <div className='numbers-content'>
                        <span>275</span>
                        <h4>Current <span>Fixings</span></h4>
                    </div>
                    <div className='numbers-content'>
                        <span>6325</span>
                        <h4>Happy<span>Clients</span></h4>
                    </div>
                    <div className='numbers-content'>
                        <span>22</span>
                        <h4>Years<span>Experiance</span></h4>
                    </div>
                    <div className='numbers-content'>
                        <span>5750</span>
                        <h4>Devices<span>Fixing</span></h4>
                    </div>
                </div>
            </div>
            <div className='abt-us'>
                <div className='image-abt-us'>
                    <img src="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/client-image2.jpg" data-src="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/client-image2.jpg" class="vc_single_image-img attachment-full ls-is-cached lazyloaded" alt="Clients" decoding="async" title="client-image2" data-srcset="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/client-image2.jpg 585w, https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/client-image2-279x300.jpg 279w, https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/client-image2-401x430.jpg 401w" data-sizes="(max-width: 585px) 100vw, 585px" sizes="(max-width: 585px) 100vw, 585px" srcset="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/client-image2.jpg 585w, https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/client-image2-279x300.jpg 279w, https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/client-image2-401x430.jpg 401w" />
                </div>
                <div className='text-abt-us'>
                    <div className='text-abtus'>
                        <h2 style={{ color: "black", display: "flex", justifyContent: "center", width: "33%", marginLeft: "209px" }}>Our Clients</h2>
                        <h2 style={{ color: "black", display: "flex", justifyContent: "center" }}>Opinion About Us</h2>
                        <p style={{ color: "rgb(151 140 140)" }}>A reliable repair service is hard to find but these guys rock. They’re very professional and helpful. They kept me update throughout the entire process of my computer being fixed. Highly recommended.</p>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "48px" }}>
                            <h3 style={{ color: "black" }}>DEBORAH BECK</h3>
                            <span style={{ color: "grey" }}>CTO, DEBORAH SOFTWARES, USA</span>
                            <p style={{ color: "rgb(151 140 140)", width: "63%", marginLeft: "50px" }}>A reliable repair service is hard to find but these guys rock. They’re very professional and helpful. They kept me update throughout the entire process of my computer being fixed. Highly recommended.</p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "48px" }}>
                            <h3 style={{ color: "black" }}>HARRY WILLIAMS</h3>
                            <span style={{ color: "grey" }}>CEO, HW TECH INC, BULGARIA</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='before-footer'>
                <h2>Do you have any question? Feel free to request for a quote</h2>
                <div className='button-bfr'>
                    <a href='#' alt="#" class="btn" >REQUEST FOR QUOTE</a>
                </div>
            </div>
            
        </div>
    );
}

export default Home