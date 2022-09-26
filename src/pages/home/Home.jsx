import Feature from "../../components/feature/Feature";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

function Home() {
    return <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
            <Feature/>
            <h1 className="homeTitle">
                Browse my property type
            </h1>
            <PropertyList/>
        </div>
    </div>;
}

export default Home;