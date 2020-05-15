import React from "react";

function About(){
    return(
        <section class="section-about">
      <div id="about"></div>
      <div class="bg-video">
        <video class="bg-video__content" autoPlay muted loop>
          <source src="/images/rockymtn.mp4" type="video/mp4" />
          Your browser is not supported
        </video>
      </div>
      <div class="u-center-text u-margin-bottom-big">
        <h2 class="heading-secondary heading-secondary__1">
          We're the boys of Littleton
        </h2>
      </div>
      
      <div class="row u-margin-bottom-medium">
      <div class="col-1-of-3">
          <div class="feature-box">
            <h3 class="heading-tertiary u-margin-bottom-small">
              League Updates
            </h3>
            <p class="feature-box__text u-margin-bottom-small">
              See what the commish has to say this week. It probably isn't important, but it might be important.
            </p>
            <a href="#" class="btn btn--white feature-box__button">Go</a>
          </div>
        </div>
        <div class="col-1-of-3">
          <div class="feature-box">
            <h3 class="heading-tertiary u-margin-bottom-small">
              Power Rankings
            </h3>
            <p class="feature-box__text u-margin-bottom-small">
              View this weeks power rankings, or navigate back in time to read about a past version of your squad that didn't suck.
            </p>
            <a href="#" class="btn btn--white feature-box__button">Go</a>
          </div>
        </div>
        <div class="col-1-of-3">
          <div class="feature-box">
            <h3 class="heading-tertiary u-margin-bottom-small">
              League Champions
            </h3>
            <p class="feature-box__text u-margin-bottom-small">
              Reminisce on your dominance in a prior year, or ponder a future where your face actually appears on this page.
            </p>
            <a href="#" class="btn btn--white feature-box__button">Go</a>
          </div>
        </div>
        
      </div>
      <div class="arrow">
        <a class="arrow__style" href="#smack"><i class="fas fa-chevron-down"></i></a>
      </div>
    </section>
    )
}

export default About;