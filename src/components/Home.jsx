import HomeBanner from "./HomeBanner";
import HomeChoose from "./HomeChoose";
import HomeOffline from "./HomeOffline";
import HomeSave from "./HomeSave";
import Pets from "./Pets";
import Follow from "./Follow";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

function Home(){
    return(
        <>
            <HomeBanner/>
            <HomeChoose/>
            <HomeOffline/>
            <HomeSave/>
            <Pets/>
            <Follow/>
            <Subscribe/>
            <Footer/>
        </>
    );
}

export default Home;