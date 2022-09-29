import MailList from "../mailList/MailList";
import Footer from "../footer/Footer";
import "./defaultLayout.css";
function DefaultLayout({ children }) {
    return <div className="bookingPage">
        { children } 
        <MailList/>
        <Footer/>
    </div>
}

export default DefaultLayout;