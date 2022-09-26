import "./header.css";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from "react";
import { DateRange } from 'react-date-range';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
// FUNTION COMPONENT
function Header({ type }) {

    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })
    const handleOptions = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            }

        })
    }
    return <div className="header">
        <div className={ type === "list" ? "headerContainer listMode" : "headerContainer"}>
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport Taxis</span>
                </div>
            </div>
            {type !== "list" && <>
                <h1 className="headerTitle">
                    A lifetime of discounts? It's Genius.
                </h1>
                <p className="headerDesc">
                    Get rewarded for your travels - unlock instant savings of 10% or more with a free haitranbooking account
                </p>
                <button className="headerBtn">
                    Sign in / Register
                </button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input
                            type="text"
                            placeholder="Where are you going?"
                            className="headerSearchInput"
                        />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                        />}

                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span
                            onClick={() => setOpenOptions(!openOptions)}
                            className="headerSearchText">{`${options.adult} adult • ${options.children} children • ${options.room} room`}
                        </span>
                        {openOptions && <div className="options">
                            <div className="optionsItem">
                                <span className="optionsText">Adult</span>
                                <div className="optionsCouter">
                                    <button
                                        disabled={options.adult <= 1}
                                        className="optionsCouterButton"
                                        onClick={() => handleOptions("adult", "d")}>-</button>
                                    <span className="optionsNumber">{options.adult}</span>
                                    <button className="optionsCouterButton"
                                        onClick={() => handleOptions("adult", "i")}
                                    >+</button>
                                </div>
                            </div>
                            <div className="optionsItem">
                                <span className="optionsText">children</span>
                                <div className="optionsCouter">
                                    <button
                                        disabled={options.children <= 0}
                                        className="optionsCouterButton"
                                        onClick={() => handleOptions("children", "d")}>-</button>
                                    <span className="optionsNumber">{options.children}</span>
                                    <button
                                        className="optionsCouterButton"
                                        onClick={() => handleOptions("children", "i")}
                                    >+</button>
                                </div>
                            </div>
                            <div className="optionsItem">
                                <span className="optionsText">Room</span>
                                <div className="optionsCouter">
                                    <button
                                        disabled={options.room <= 1}
                                        className="optionsCouterButton"
                                        onClick={() => handleOptions("room", "d")} >-</button>
                                    <span className="optionsNumber">{options.room}</span>
                                    <button
                                        className="optionsCouterButton"
                                        onClick={() => handleOptions("room", "i")}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn">Search</button>
                    </div>
                </div>
            </>}
        </div>
    </div>
};

export default Header;