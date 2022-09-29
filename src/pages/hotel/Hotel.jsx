import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import "./hotel.css";
import { useState } from "react";
function Hotel() {
    const photos = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
        },
    ];
    const [slide, setSlide] = useState(0);
    const [open,setOpen] = useState(false);
    const handleOpen = (i)=>{
        setSlide(i);
        setOpen(true);
    }
    const handleMove = (direction) =>{
        let newSlideNumber;
        if(direction === "l"){
            newSlideNumber = slide === 0 ? photos.length - 1 : slide - 1;
        }else {
            newSlideNumber = slide === photos.length - 1 ? 0 : slide + 1;
        }
        setSlide(newSlideNumber);
    }
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="hotelContainer">
                {open && <div className="slider">
                        <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
                        <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow"  onClick={()=> handleMove("l")}/>
                        <div className="sliderWrapper">
                            <img src={photos[slide].src} alt="" className="sliderImg" />
                        </div>
                        <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=> handleMove("r")}/>
                    </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserver or Book Now!</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Elton St 125 New York</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location - 500m from center
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay over $114 at this property and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo,i) => (
                            <div className="hotelImgWrapper">
                                <img key={i} onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet?</h1>
                            <p className="hotelDesc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Maiores hic eveniet, blanditiis, quae quaerat ipsam laboriosam
                                atque quia, dolore explicabo reprehenderit fugiat quo corrupti?
                                Eum repudiandae vero aperiam? Illum voluptas eaque expedita placeat
                                cum possimus at iusto, dolor quasi cumque velit repellendus animi quam
                                molestiae tenetur dignissimos deserunt fugit voluptatibus. Cumque quas
                                deserunt totam, iure nisi nesciunt dolores nihil. Beatae in, ipsa eveniet quae tenetur
                                porro necessitatibus accusantium unde, iure pariatur deleniti iusto.
                                Tempore fugit molestiae unde cum ratione officiis, aperiam impedit.
                                Ullam possimus eos ratione aliquam minus voluptas iste! Repellat
                                repudiandae aut temporibus quas saepe rerum voluptatibus ab ducimus!
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione earum non necessitatibus?
                            </span>
                            <h2>
                                <b>$945</b> (9 nights)
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>);
}

export default Hotel;