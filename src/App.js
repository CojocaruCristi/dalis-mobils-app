import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from "./Components/Header/Header";
import {MottoSection} from "./Components/MottoSection/MottoSection";
import {PortfolioSection} from "./Components/PortfolioSection/PortfolioSection";
import {ContactSection} from "./Components/ContactSection/ContactSection";
import {MapSection} from "./Components/MapSection/MapSection";
import {Footer} from "./Components/Footer/Footer";


function App() {
    return (
        <>
            <Header/>
            <MottoSection/>
            <PortfolioSection />
            <ContactSection />
            <MapSection />
            <Footer />
        </>
    );
}

export default App;
