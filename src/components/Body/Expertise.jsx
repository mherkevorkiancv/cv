import arrow from "../../assets/arrowWhite.png"
import { useState } from "react"

export default function Expertise(){
    let [show,setShow] = useState(false)
    return(
        <div className="language-container">
            <button onClick={() => {
                setShow(!show)
            }}>Expertise 
            <img style={{transform:`rotate(${show === false ? "360deg" : "180deg"})`}} src={arrow} alt="" /></button>
            {show === false ? "" : <ul>
                <li>Fast Learner</li>
                <li>Good Communication Skills</li>
                <li>Time Management</li>
                <li>Creativity</li>
            </ul>}
        </div>
    )
}