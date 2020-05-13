import React from "react";

function Navigation(){
    return(
        <div class="navigation">
    <input type="checkbox" id="navi-toggle" class="navigation__checkbox" />

    <label for="navi-toggle" class="navigation__button">
      <span class="navigation__icon"></span>
    </label>

    <div class="navigation__background">&nbsp;</div>

    <nav class="navigation__nav">
      <ul class="navigation__list">
        <li class="navigation__item"><a href="/" class="navigation__link"><span>01</span>Home</a></li>
        <li class="navigation__item"><a href="#" class="navigation__link"><span>02</span>League Updates</a></li>
        <li class="navigation__item"><a href="#" class="navigation__link"><span>03</span>Power Rankings</a></li>
        <li class="navigation__item"><a href="#" class="navigation__link"><span>04</span>League Champions</a></li>
      </ul>
    </nav>
  </div>
    );

}

export default Navigation;
