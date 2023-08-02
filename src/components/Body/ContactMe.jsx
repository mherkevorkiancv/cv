import phone from "../../assets/phone.png"
import address from "../../assets/ad.png"
import email from "../../assets/email.png"
import arrow from "../../assets/arrowWhite.png"
import { useState } from "react"
export default function ContactMe(){
    let [show,setShow] = useState(false)
    return(
        <div className="contact-me-container">
            <button onClick={() => {
                setShow(!show)
            }}>Contact Me 
            <img style={{transform:`rotate(${show === false ? "360deg" : "180deg"})`}} src={arrow} alt="" /></button>
            {show === false ? "" : <div>
            <div>
                <img className="phone" src={phone}/>
                <p>(+374) 95 152 157</p>
            </div>
            <div>
                <img className="phone" src={email}/>
                <p>Mherkevorkian99@gmail.com</p>
            </div>
            <div>
                <img className="address" src={address}/>
                <p>Yerevan, Armenia</p>
            </div>
            </div>}
        </div>
    )
}