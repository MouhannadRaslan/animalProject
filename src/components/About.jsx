import Pets from "./Pets";
import Follow from "./Follow";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import AboutMission from "./AboutMission";
import AboutLinda from "./AboutLinda";
import AboutHappy from "./AboutHappy";
import AboutKira from "./AboutKira";


function About(){
    return(
        <>
            <AboutMission/>
            <AboutLinda/>
            <AboutHappy/>
            <AboutKira/>
            
            <Pets/>
            <Follow/>
            <Subscribe/>
            <Footer/>
        </>
    );
}

export default About;