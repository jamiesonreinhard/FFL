import React from "react";

function Photos(){
    return(
        <div>
            <section className="section-buff-photos">  
        <div id="photos"></div>      
        <div className="row">
          <div className="u-left-text u-margin-bottom-big">
            <h2 className="heading-secondary heading-secondary__alt heading-secondary__1">
              <span>The Buff Division</span>
            </h2>
          </div>
          <div className="col-1-of-6">
            <div className="photo-box">
              <img src="/images/brian Cropped.png" alt="" className="photo-box__image" />
              <figcaption className="heading-tertiary photo-box__caption">Brian</figcaption>
            </div>
          </div>
          <div className="col-1-of-6">
            <div className="photo-box">
              <img src="/images/Deric Cropped.png" alt="" className="photo-box__image" />
              <figcaption className="heading-tertiary photo-box__caption">Deric</figcaption>
            </div>
          </div>
          <div className="col-1-of-6">
            <div className="photo-box">
              <img src="/images/woody Cropped.png" alt="" className="photo-box__image" />
              <figcaption className="heading-tertiary photo-box__caption">Woody</figcaption>
            </div>
          </div>
          <div className="col-1-of-6">
            <div className="photo-box">
              <img src="/images/matt Cropped.png" alt="" className="photo-box__image" />
              <figcaption className="heading-tertiary photo-box__caption">Matt</figcaption>
            </div>
          </div>
          <div className="col-1-of-6">
            <div className="photo-box">
              <img src="/images/jamo Cropped.png" alt="" className="photo-box__image" />
              <figcaption className="heading-tertiary photo-box__caption">Jamo</figcaption>
            </div>
          </div>
          <div className="col-1-of-6">
            <div className="photo-box">
              <img src="/images/will Cropped.png" alt="" className="photo-box__image" />
              <figcaption className="heading-tertiary photo-box__caption">Will</figcaption>
            </div>
        </div>
        </div>
        </section>
        <section class="section-nobuff-photos">

      <div class="row">
        <div class="u-right-text u-margin-bottom-big">
          <h2 class="heading-secondary heading-secondary__alt-1 heading-secondary__1">
            <span>The Non-Buff Division</span>
          </h2>
        </div>
        <div class="col-1-of-6">
          <div class="photo-box">
            <img src="/images/Rory Cropped.png" alt="" class="photo-box__image" />
            <figcaption class="heading-tertiary photo-box__caption">Rory</figcaption>
          </div>
        </div>
        <div class="col-1-of-6">
          <div class="photo-box">
            <img src="/images/Spencer Cropped.png" alt="" class="photo-box__image" />
            <figcaption class="heading-tertiary photo-box__caption">Spencer</figcaption>
          </div>
        </div>
        <div class="col-1-of-6">
          <div class="photo-box">
            <img src="/images/brandon Cropped.png" alt="" class="photo-box__image" />
            <figcaption class="heading-tertiary photo-box__caption">Brandon</figcaption>
          </div>
        </div>
        <div class="col-1-of-6">
          <div class="photo-box">
            <img src="/images/gork Cropped.png" alt="" class="photo-box__image" />
            <figcaption class="heading-tertiary photo-box__caption">Mark</figcaption>
          </div>
        </div>
        <div class="col-1-of-6">
          <div class="photo-box">
            <img src="/images/garrett Cropped.png" alt="" class="photo-box__image"/>
            <figcaption class="heading-tertiary photo-box__caption">Garrett</figcaption>
          </div>
        </div>
        <div class="col-1-of-6">
          <div class="photo-box">
            <img src="/images/sam Cropped.png" alt="" class="photo-box__image" />
            <figcaption class="heading-tertiary photo-box__caption">Sam</figcaption>
          </div>
        </div>
      </div>
    </section>     
        </div>
        
    );
}

export default Photos;