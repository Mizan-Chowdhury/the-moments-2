import About from "./About";
import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Services from "./services/Services";
import Volunteer from "./volunteer/Volunteer";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Services></Services>
            <Volunteer></Volunteer>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;