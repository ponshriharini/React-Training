import React, { createContext, useState } from 'react';

export const TrackingContext = createContext();

export const TrackingProvider = ({ children }) => {
    const [trackingInput, setTrackingInput] = useState({ value: "" });
    const [trackingType, setTrackingType] = useState("AWB");
    const [SearchHistory, setSearchHistory] = useState({History: []});

    return (
        <TrackingContext.Provider value={{ trackingInput, setTrackingInput, trackingType, setTrackingType, SearchHistory, setSearchHistory }}>
            {children}
        </TrackingContext.Provider>
    );
};
