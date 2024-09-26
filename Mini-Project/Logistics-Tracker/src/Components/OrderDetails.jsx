import { useContext } from "react";
import { TrackingContext } from '../Context/TrackingContext';
import "../Styles/OrderDetailsStyles.css";

function OrderDetails() {
    const { SearchHistory, setTrackingInput, trackingType } = useContext(TrackingContext);

    const setTrackingId = (item) => {
        const trackingId = trackingType === "AWB" ? item.AWBNumber : item.shipmentId;
        setTrackingInput({ value: trackingId });
    };

    return (
        <div className="Order-Details-Container">
            <div className="Order-Details-Header"><h5>HISTORY</h5></div>
            <div className="Order-Details-Card">
                {SearchHistory.History.map((item, index) => (
                    <div
                        key={index}
                        className="Order-Details"
                        onClick={() => setTrackingId(item)} 
                    >
                        {trackingType === "AWB" ? item.AWBNumber : item.shipmentId} 
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OrderDetails;
