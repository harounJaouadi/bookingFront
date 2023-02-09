import  FeaturedProperties  from "../../components/featuredProperties/FeaturedProperties";
import  Featured  from "../../components/featured/Featured";
import  Header  from "../../components/header/Header";
import  NavBar from "../../components/navbar/NavBar";
import  PropertyList  from "../../components/propertyList/PropertyList";
import "./Home.css"
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Home = function () {
    return <div>

        <NavBar></NavBar>
        <Header></Header>
        <div className="homeContainer">
            <Featured></Featured>
            <h1 className="homeTitle">Browse by property type</h1>
            <PropertyList></PropertyList>
            <h1 className="homeTitle">Home guess love</h1>
            <FeaturedProperties></FeaturedProperties>
            <MailList></MailList>
            <Footer></Footer>
        </div>
    </div>
};
export default Home; 
