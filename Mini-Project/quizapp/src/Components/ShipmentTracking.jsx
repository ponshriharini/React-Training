import React, { useEffect, useState, useContext } from 'react';
import { TrackingContext } from '../Context/TrackingContext';
import "../Styles/TrackingStyles.css";

function ShipmentTracking() {
    const { trackingInput, setSearchHistory, SearchHistory } = useContext(TrackingContext);
    const [shipment, setShipment] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchShipmentData = async () => {
            try {
                const response = await fetch("http://localhost:8000/Shipments");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();

                const foundShipment = data.find(item => {
                    if (trackingInput.value) {
                        return (trackingInput.value === item.AWBNumber) || (trackingInput.value === item.shipmentId);
                    }
                    return false;
                });

                setShipment(foundShipment);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (trackingInput.value) {
            fetchShipmentData();
        }
    }, [trackingInput.value]);

    useEffect(() => {
        if (trackingInput.value && shipment) {
            const updatedSearchHistory = [...SearchHistory.History];

            const existingEntryIndex = updatedSearchHistory.findIndex(entry => 
                entry.AWBNumber === shipment.AWBNumber || entry.shipmentId === shipment.shipmentId
            );

            if (existingEntryIndex > -1) {
                updatedSearchHistory[existingEntryIndex] = shipment;
            } else {
                updatedSearchHistory.push(shipment);
            }

            setSearchHistory({ History: updatedSearchHistory });
        }
    }, [trackingInput.value, shipment]);

    if (!trackingInput.value) return <div></div>;
    if (!shipment) return <div className='mt-3 alert alert-light'>No Data found</div>;
    if (loading) return <div>Loading...</div>;
    if (error) return <div className='mt-3 alert alert-danger'>Error: {error}</div>;

    const hasDelivered = shipment.trackingUpdates.some(update => update.status === "Package delivered");

    const trackingEvents = [
        ...shipment.trackingUpdates,
        ...(hasDelivered ? [] : [{
            timestamp: shipment.estimatedDelivery,
            status: "Pending delivery",
            location: shipment.destination.address,
        }])
    ];

    return (
        <div className="Shipment-Tracking-main-Container mt-3">
            <div className="Tracking-Container">
                <h3>Logistics Tracker</h3>
                <div className="Tracking-Line">
                    {trackingEvents.map((update, index) => (
                        <div key={index} className="Tracking-Event">
                            <div className={`Dot ${update.status === "Pending delivery" ? "Pending" : (index < shipment.trackingUpdates.length ? "Completed" : "In-Transit")}`}>
                                <span className="Tooltip">{update.status}</span>
                            </div>
                            {index < trackingEvents.length - 1 && (
                                <div className={`Vertical-Line ${index < shipment.trackingUpdates.length ? "Completed" : "Pending"}`} />
                            )}
                            <div className="Event-Details">
                                <p><div className='fw-normal'>{new Date(update.timestamp).toLocaleString()}</div> {update.status} at {update.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <hr />
                <div className="Notifications">
                    <h3>Notifications</h3>
                    {shipment.notifications.map((notification, index) => (
                        <div key={index} className={`Notification ${notification.type} ps-2`}>
                            <p>{notification.message}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="Logistics-Details-Container">
                <h3>Package Items</h3>
                {shipment.items.map((item) => (
                    <div key={item.itemId} className="Package-Item">
                        <p>Description: <strong>{item.description}</strong></p>
                        <p>Quantity: <strong>{item.quantity}</strong></p>
                        <p>Weight: <strong>{item.weight}</strong></p>
                    </div>
                ))}
                <hr />
                <h3>Carrier Details</h3>
                <p>Name: <strong>{shipment.carrier.name}</strong></p>
                <p>Tracking Number: <strong>{shipment.carrier.trackingNumber}</strong></p>
                <p>Contact Phone: <strong>{shipment.carrier.contact.phone}</strong></p>
                <p>Contact Email: <strong>{shipment.carrier.contact.email}</strong></p>
            </div>
        </div>
    );
}

export default ShipmentTracking;