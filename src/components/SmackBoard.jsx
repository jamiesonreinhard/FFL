import React from "react";

function SmackBoard(){
    return(
        
    <section class="section-smack">
     <div id="smack"></div>
        <div class="row">
        <div className="create-area">
            <h3 class="heading-tertiary">Smack Board</h3>
            <form class="create-area-form">
                <input class="create-area-form__title" name="title" placeholder="Title" autocomplete="off"></input>
                <textarea class="create-area-form__content" name="content" placeholder="Content" rows="5" autocomplete="off"></textarea>
            </form>
        </div>
        </div>
       
        <div class="arrow">
        <a class="arrow__style" href="#photos"><i class="fas fa-chevron-down"></i></a>
      </div>
    </section>
    )}


export default SmackBoard;