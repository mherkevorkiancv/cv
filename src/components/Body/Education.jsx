import arrow from "../../assets/arrowWhite.png"
import { useState } from "react"

export default function Education(){
    let [show,setShow] = useState(false)
    return(
        <div className="experience-container">
            <button  onClick={() => setShow(!show)}>Education and Courses 
            <img style={{transform:`rotate(${show === false ? "360deg" : "180deg"})`}} src={arrow} alt="" /></button>
            {show === false ? "" : 
            <>
                <div>
                    <div>
                        <h4>Armenian Secondary School</h4>
                        <p>High School Diploma</p>
                    </div>
                    <div>
                        <p>Anjar, Lebanon</p>
                        <i>Sep 2014 - Jun 2017</i>
                    </div>
                </div>
                <div>
                    <div>
                        <h4>European University of Armenia</h4>
                        <p>Bachelor's Degree in IT</p>
                    </div>
                    <div>
                        <p>Yerevan, Armenia</p>
                        <i>Oct 2019 - May 2023</i>
                    </div>
                </div>
                <div>
                    <div>
                        <h4>EPAM</h4>
                        <p>Online Javascript Course Training</p>
                    </div>
                    <div>
                        <p>Yerevan, Armenia</p>
                        <i>Feb 2022 - Aug 2022</i>
                    </div>
                </div>
                <div>
                    <div>
                        <h4>Mosh Hamadani Academy</h4>
                        <p>Online React + TypeScript Course</p>
                    </div>
                    <div>
                        <p>Yerevan, Armenia</p>
                        <i>July 2023 - Aug 2023</i>
                    </div>
                </div>
            </>
            }
        </div>
    )
}