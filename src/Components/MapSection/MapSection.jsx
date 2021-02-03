import React from "react";
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import styledClasses from "../PortfolioSection/PortfolioSection.module.css";
import styles from "./mapSection.module.css";



export const MapSection = () => {
    return (
        <div id={"information"} className={styles.mapSection}>
            <div className={styledClasses.portfolioSectionHeader}>
                <h1 className={styledClasses.portfolioSectionHeaderH1}>Information</h1>
            </div>
            <Map center={[46.990002, 28.894194]} zoom={15} style={{width: "100%", height: "500px"}} metaWheelZoom={true}>
                <Marker anchor={[46.990002, 28.894194]} payload={1}/>
            </Map>
        </div>
    )
}