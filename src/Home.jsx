import { Carousel, CarouselItem } from "react-bootstrap"
import { Link } from "react-router-dom"
import emailjs from "@emailjs/browser"
import { useRef } from "react"
let Home=()=>{
    
        
    return <>
    <Carousel className="container">
        <CarouselItem>
            <img height="50%" width="100%" src="https://botika.io/cdn-cgi/image/width=1920,height=1080,fit=crop,quality=90,gravity=auto,sharpen=1,metadata=none,format=auto,onerror=redirect/wp-content/uploads/2023/11/Botika_Main_Hero_AI_Models.png" />
        </CarouselItem>
        <CarouselItem>
            <img height="50%" width="100%" src="https://media.licdn.com/dms/image/D5612AQF4F4XtkdDGKw/article-cover_image-shrink_720_1280/0/1698637941580?e=2147483647&v=beta&t=Bji6mu2sshRZ-cv-n2YuXdFSnpb-buigOZAh07mD8Ig" />
        </CarouselItem>
        <CarouselItem>
            <img height="50%" width="100%" src="https://images.ctfassets.net/udk41sh7kfzj/4VaTrZw4tScarQ2Ydtxl61/3a5c24d993ccb608e59eccc4a1d8b72e/March-Clothes-Toppers-JEANS-B.jpg?w=1380&q=80&fm=jpg&fl=progressive" />
        </CarouselItem>
    </Carousel>
    <footer className="navbar bg-dark navbar-dark">
            <div className="container">
                <div className="row">
                    <div className="col-4">

                        <Link className="navbar-brand">ABOUT</Link>
                        
                        <hr color="red"></hr>
                        {/* <h1>Good MorningGood MorningGood Morning</h1> */}
                        <ul className="navbar-nav">
                            <li className="nav-link">This is our website, where you can buy brand new clothes and latest design clothes</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <Link className="navbar-brand">LOCATION</Link>
                        <hr color="red"></hr>
                        {/* <h1>Good MorningGood MorningGood Morning</h1> */}
                        <ul className="navbar-nav">
                            <li className="nav-link">141,18th A main,indiranagar,Bengaluru,560058</li>
                      
                        </ul>
                    </div>
                    <div className="col-4">
                        <Link className="navbar-brand">GET IN TOUCH</Link>
                        <hr color="red"></hr>
                        <ul className="navbar-nav">
                           <Link to="/About" className="nav-link"><li>About</li></Link> 
                           <Link to="/Contact" className="nav-link"><li>Contact</li></Link>
                           <Link to="/Sign" className="nav-link"><li>Signin</li></Link>
                           <Link className="nav-link"><li>+91 8250929212</li></Link> 
                           <Link className="nav-link"><li>kunalkumbhakar11@gmail.com</li></Link>
                           </ul>
                    </div>
                </div>
            </div>
    </footer>
    </>
}
export default Home