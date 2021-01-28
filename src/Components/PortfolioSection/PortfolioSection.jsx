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
            <p className={styledClasses.parTarget} ><a href="https://www.facebook.com/dalisfurniture/photos" target="_blank" className={styledClasses.linkTarget} >See more</a></p>
            <Gallery photos={photosArr} direction={"row"} />
        </div>
    )
}