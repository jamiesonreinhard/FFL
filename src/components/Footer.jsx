import React from "react";

function Footer(){
    return(
        <footer class="footer">
    <div class="row">
      <div class="footer__logo-box">
        <img src="images/HHS helmet.png" alt="helmet" class="footer__logo" />
      </div>
      <div class="footer__navigation">
        <ul class="footer__list">
          <li class="footer__item"><a class="footer__link" href="/">Home</a></li>
          <li class="footer__item"><a class="footer__link" href="/">League Updates</a></li>
          <li class="footer__item"><a class="footer__link" href="/">Power Rankings</a></li>
          <li class="footer__item"><a class="footer__link" href="/">League Champions</a></li>
          <li class="footer__item"><a class="footer__link" href="/">ESPN Fantasy</a></li>
        </ul>
      </div>
    </div>
  </footer>
    );
}

export default Footer;