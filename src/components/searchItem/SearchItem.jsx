import "./searchItem.css";
function SearchItem() {
    return (
        <div className="searchItem">
            <img
                src="https://cf.bstatic.com/xdata/images/hotel/square600/273953720.webp?k=099979974a69eb9fdc2c744d3e467428b4425ba74940c783dc5c9e140e2ff04a&o=&s=1"
                alt=""
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">Tower Street Apartments</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">
                    Studio Apartment with Air conditioning
                </span>
                <span className="siFeatures">
                    Entire studio • 1 bathroom • 21m2 1 full bed
                </span>
                <span className="siCancelOp">
                    Free canellation
                </span>
                <div className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </div>

            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$123</span>
                    <span className="siTaxOp">
                        Includes taxes and fees
                    </span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>


        </div>);
}

export default SearchItem;