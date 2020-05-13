import React from "react";

function Header(){
    return(
 <header class="header">

    <div class="header__von-box">
      <img src="images/pngguru.com.png" alt="von-img" />
    </div>
    <div class="header__text-box u-center-text">
      <h1 class="heading-primary u-margin-bottom-medium">
        <span class="heading-primary--main">Welcome, Eagles</span>
        <span class="heading-primary--sub">to the HHS Alumni Fantasy Hub</span>
      </h1>
      <a href="https://www.espn.com/fantasy/football/" class="btn btn--white btn--animated">Set your lineup on ESPN</a>
    </div>
    <div class="arrow">
      <a class="arrow__style" href="#about"><p>&mapstodown;</p></a>
    </div>

  </header>
    )
}

export default Header;