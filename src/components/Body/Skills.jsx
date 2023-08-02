import { useState } from "react"
import arrow from "../../assets/arrowWhite.png"

export default function Skills(){
    let [show,setShow] = useState(false)
    return (
        <div className="language-container">
            <button onClick={() => setShow(!show)}>Skills
            <img style={{transform:`rotate(${show === false ? "360deg" : "180deg"})`}} src={arrow} alt="" /></button>
            {show === false ? "" : <ul>
                <li><h4>Programming Languages:</h4> JavaScript, React.js, Node.js, MySQL</li>
                <li><h4>Markup Languages:</h4> HTML, CSS</li>
                <li><h4>Microsoft Office:</h4>Word, Excel, PowerPoint</li>
            </ul>}
        </div>
    )
}