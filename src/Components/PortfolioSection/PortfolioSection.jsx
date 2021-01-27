import React from "react";
import Gallery from "react-photo-gallery";
import styledClasses from "./PortfolioSection.module.css";
import {photosArr} from "./photos"


export const PortfolioSection = (props) => {

    return (
        <div id={"gallery"} style={{position: "relative"}}>

            <div className={styledClasses.portfolioSectionHeader}>
                <h1 className={styledClasses.portfolioSectionHeaderH1}>Portfolio</h1>
            </div>
            <div className={styledClasses.seeMore}>
                <a href="https://www.facebook.com/dalisfurniture/photos" target="_blank">See more</a>
            </div>
            <Gallery photos={photosArr} direction={"row"} />

        </div>
    )
}