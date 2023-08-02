import myPhoto from "../assets/mher.jpg"
import "../styles/Header.css"
export default function Header(){
    return(
        <div className="header-container">
            <div className="header-container_left">
                <div className="header-left"></div>
                <img className="my-photo" src={myPhoto}/>
            </div>
            <div className="header-container_middle">
                <h1>MHER</h1>
                <h1>KEVORKIAN</h1> 
            </div>
            <h3>Web Developer</h3>
            <div className="header-container_right"></div>
        </div>      
    )
}