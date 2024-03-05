import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Project from "../Project/Project";
import Services from "../Services/Services";
import Skill from "../Skill/Skill";


const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <About></About>
        <Services></Services>
        <Skill></Skill>
        <Project></Project>
        <Contact></Contact>
        </div>
    );
};

export default Home;