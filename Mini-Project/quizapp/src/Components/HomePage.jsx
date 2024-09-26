import ShipmentTracking from "./ShipmentTracking";
import TrackingInput from "./TrackingInput";
import OrderDetails from "./OrderDetails";

function HomePage() {
    return (
            <div className="main-container">
                <div className="home-content">
                    <h1 className="zen-dots-regular">Xpress Tracker</h1>
                    <h2>Redefining logistics with the most innovative approach</h2>
                </div>
                <TrackingInput />
                <OrderDetails />
                <ShipmentTracking />
            </div>
    );
}

export default HomePage;
