import "../Styles/InputStyles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { faTruck, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from "react";
import { TrackingContext } from '../Context/TrackingContext';

function TrackingInput() {
    const { setTrackingInput, trackingType, setTrackingType } = useContext(TrackingContext);

    const [placeholder, setPlaceholder] = useState("Enter AWB No."); 
    const [inputValue, setInputValue] = useState("");

    const handleOptionClick = (option) => {
        setPlaceholder(option === "AWB" ? "Enter AWB No." : "Enter Order ID");
        setTrackingType(option);
        setInputValue(""); 
    };

    const handleSubmit = () => {
        setTrackingInput({ value: inputValue });
        setInputValue(""); 
    };

    return ( 
        <div className="input-main-div">
            <div className="input-div">
                <div className="tracking">
                    <div>
                        <div className="tracking-icon-image text-white">
                            <FontAwesomeIcon icon={faTruck} /> ----- <FontAwesomeIcon icon={faLocationPin} />
                        </div>
                        <h5 className="text-white fw-bold">Track Your Shipment</h5>
                    </div>
                </div>
                <div className={`tracking-options ${trackingType === "AWB" ? "active" : ""}`} onClick={() => handleOptionClick("AWB")}>AWB No.</div>
                <div className={`tracking-options ${trackingType === "Order" ? "active" : ""}`} onClick={() => handleOptionClick("Order")}>Order ID</div>
                <div className="form-input">
                    <input 
                        onChange={(e) => setInputValue(e.target.value)} 
                        type="text" 
                        className="form-control-plaintext" 
                        id="input-field" 
                        placeholder={placeholder} 
                        value={inputValue} 
                    />
                    <button className="btn enter" onClick={handleSubmit}> 
                        <FontAwesomeIcon icon={faGreaterThan} /> 
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TrackingInput;
