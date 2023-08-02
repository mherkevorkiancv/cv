import arrow from "../../assets/arrowWhite.png"
import { useState } from "react"

export default function Experience(){
    let [show,setShow] = useState(false)
    return(
        <div className="experience-container">
            <button onClick={() => setShow(!show)}>Experience 
            <img style={{transform:`rotate(${show === false ? "360deg" : "180deg"})`}} src={arrow} alt="" /></button>
            {show === false ? "" : <>
            <div>
                <div>
                    <h4>STA Company</h4>
                    <p>Web Developer Intern</p>
                </div>
                <div>
                    <p>Yerevan, Armenia</p>
                    <i>Jan 2022 - May 2022</i>
                </div>
            </div>
            <div>
                <div>
                    <h4>Logistics Company</h4>
                    <p>Accounting Manager</p>
                </div>
                <div>
                    <p>Yerevan, Armenia</p>
                    <i>June 2022 - Present</i>
                </div>
            </div>
            </>}
        </div>
    )
}