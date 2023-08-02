import AboutMe from "./Body/AboutMe";
import "../styles/body.css";
import ContactMe from "./Body/ContactMe";
import Language from "./Body/Language";
import Expertise from "./Body/Expertise";
import Experience from "./Body/Experience";
import Education from "./Body/Education";
import Skills from "./Body/Skills";
export default function Body(){
    
    return(
        <div className="body-container">
            <AboutMe />
            <ContactMe />
            <Language />
            <Expertise />
            <Experience />
            <Education />
            <Skills />
        </div>
    )
}