import { useState } from "react"
import arrow from "../../assets/arrowWhite.png"

export default function Language(){
    let [show,setShow] = useState(false)
    return(
        <div className="language-container">
            <button onClick={() => setShow(!show)}>Language 
            <img style={{transform:`rotate(${show === false ? "360deg" : "180deg"})`}} src={arrow} alt="" /></button>
            {show === false ? "" : <ul>
                <li>English (Fluent)</li>
                <li>Armenian (Native)</li>
                <li>Arabic (basic)</li>
            </ul>}
        </div>
    )
}