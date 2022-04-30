import React from "react";
import card from '../logo192.png'


export default function Profile() {
    return (

        
      <div className="FullProfile">
          <div class="row">
            <div class="col-md-10">
                <div class="row">
                <div class="col-md-4"><h2>Reebecca</h2><p><img src={card} class="float-left" alt="Avatar" /></p></div>
                <div class="col-md-8"><h2>Stats</h2><p>I'm some stats</p>
                <p>I'm some more stats</p>
                <p>I'm some other stats</p></div>
                </div>
                <div class="row">
                <div class="col-md-10"><h2>About Me</h2><p>Hi, I have to make this real long so that it shows how far this goes, like all the way to where it says friends and 
                    then like makes a new line hopefully, I think next I learn how to outline this box. Or maybe that'll come when I learn how to make an editable box.</p></div>
            </div> 
            </div>
            <div class="col-md-2">
            <h2 class="text-center">Friends</h2>
            <p class="text-center">Friends</p>
            <p class="text-center">Friends</p>
            <p class="text-center">Friends</p>
            <p class="text-center">Friends</p>
            <p class="text-center">Friends</p>
            <p class="text-center">Friends</p>
            <p class="text-center">Friends</p>
            </div>
            </div>

             


            

        
      </div>
      
    );
  }