import Feature from "../../components/feature/Feature";
import FeatureProperty from "../../components/featureProperty/FeatureProperty";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

function Home() {
    return <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
            <Feature />
            <h1 className="homeTitle">
                Browse my property type
            </h1>
            <PropertyList />
            <h1 className="homeTitle">
                Browse my property type
            </h1>
            <FeatureProperty />
        </div>
    </div>;
}

export default Home;