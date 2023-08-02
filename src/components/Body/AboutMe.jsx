
import arrow from "../../assets/arrowWhite.png"
import { useState } from "react"
export default function AboutMe(){
    let [show,setShow] = useState(false)

    return(
        <div className="about-me">
            <button onClick={() => {
                setShow(!show)
            }}>About Me 
            <img style={{transform:`rotate(${show === false ? "360deg" : "180deg"})`}} src={arrow} alt="" />
            </button>
            {show === false ? "" : <p className="about-me_p">
                A fast learner enthusiastic JavaScript developer mainly Front-end who enjoys coding and learning new technologies besides working hard and producing good quality code.
            </p>}
        </div>  
    )
}