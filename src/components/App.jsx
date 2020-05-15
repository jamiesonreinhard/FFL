import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import About from "./About";
import SmackBoard from "./SmackBoard";
import Photos from "./Photos";
import Footer from "./Footer";

function App(){
    return(
        <div>
        <Navigation />
        <Header />
        <About />
        <SmackBoard />
        <Photos />
        <Footer />
        </div>

    );
}

export default App;