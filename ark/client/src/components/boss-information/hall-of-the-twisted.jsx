import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./bossInfo.css";
import BlockPage from "./page";

export default function BossInfo() {

  //Sets the name
  const [name] = useState("hall-of-the-twisted");


  useEffect(() => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };


    try {
      axios.post("http://localhost:5000/hit",
        //The name is used to identify the page to increments
        { name },
        config
      )
      // alert("Click!");
    } catch (error) {
      console.log(error)
    }

  });

  return (
    // <div className="containers">
    //   <div className="infoPage">
    //     <div className="pageWrapper">
    //       <div className="dungeonTitle">
    //         <h1>Hall of the twisted Warlord:Guide</h1>
    //       </div>
    //       <div className="poster">
    //         <span className="postAuthor">
    //           By: <b>Alex</b>
    //         </span>
    //         <div class="break"></div>
    //         <span className="postDate">
    //           Published on <b>May 1st 2022</b>
    //         </span>
    //         <div class="break"></div>
    //         <span className="updated">
    //           Last Updated On <b>May 2nd 2022</b>
    //         </span>
    //       </div>
    //       <img
    //         src="/Lost-Ark-Images/Demoncanyon1.jpg"
    //         alt="firstbanner"
    //         className="first_banner_img"
    //       />
    //       <h2>Introduction</h2>
    //       <p>
    //         Necromancers Origin is the second TIER 1 Abyssal Dungeon and you need to be at least 340 Item Level to enter this Abyssal Dungeon. This dungeon drops Tier 1 Accessories, Ability Stones, Engraving Books, Cards and materials to craft the sets Rugged Valley Launcher and
    //         Seraphic Oath Launcher. After clearing the dungeon, you can pay gold to get additional loot. The recommended Combat Items are
    //         HP Potion,
    //         Splendid Whirlwind Grenade and
    //         Time Stop Potion.

    //         Compared to the first Abyssal Dungeon, this one is way more difficult. It requires a high level of cooperation between the party members and is the first dungeon to introduce the team wipe mechanic. Lack of coordination can prolong the fight or lead to a team wipe. Make sure to assign orders and positions before you enter the boss stages.

    //         This guide assumes that you are familiar with the recommended Raid Build for your class.
    //       </p>
    //     </div>
    //     <div className="pageWrapper">
    //       <h2>First Boss: Reanimated Garum</h2>
    //       <p>
    //         Reanimated Garum is a boss with slow but huge area of effect attacks. These attacks are easy to avoid, but the tricky part of this boss fight is to not lose track of the Death Marks above each player's head. One moment of carelessness can lead to an instant team wipe.
    //       </p>
    //       <h2>Special Attack Patterns and Mechanics</h2>
    //       <h4>Death Mark</h4>
    //       <p>
    //         Reanimated Garum frequently applies a death mark to each player. The amount of death marks applied can be seen on each players head. If any of the players get a 5th mark, the boss will wipe the entire party.

    //         Everytime a death mark is applied, the boss also spawns one light orb at a random location. This orb is also marked as a yellow dot on the minimap. Interacting with the orb removes all death marks on that player, but only one player can interact with each orb.

    //         The key to prevent the wipe is to assign a fixed order for players to interact with the yellow orbs. The easiest way to do that is to go with the preassigned numbers in the party which can be seen on the party UI at the left side of your screen. Player with number one is the first one to interact with the first yellow orb etc. After the first rotation, you start with player number one again.

    //         Make sure to ping the location of the light orb as soon as it spawns. Those are also easier to locate if you use the "Tab" key to open the minimap.

    //         Tip: After the first successful rotation, you just need to pay attention to the marks above your head. Everytime it reaches four marks, it is your turn to interact with the light orb.

    //         In the clip below my Wardancer had the number "3" assigned to her as you can see on the party UI to the left. That is why, during the first rotation, I interacted with the light orb as soon as I got the 3rd death mark. After that I interacted with the light orb every time I got the 4th death mark.
    //       </p>
    //       <div class="break"></div>
    //       <h2>Guide Video</h2>
    //       <div className="video">
    //         <iframe width="697" height="392" src="https://www.youtube.com/embed/7K3FuoWhVMg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    //       </div>
    //     </div>
    //     <div className="pageWrapper">
    //       <h2>Second Boss: Sigmund the Immortal</h2>
    //       <p>
    //         Sigmund the Immortal is the second boss of this abyssal dungeon. Don't worry he is not really immortal but as you can guess he will revive multiple times after death. How many times he revives and the duration of the fight depend on your execution of the co-op mechanic during the boss fig  </p>
    //       <h2>Special Attack Patterns and Mechanics</h2>
    //       <h4 classname="special-skill-title">Death and Revive</h4>
    //       <p>
    //         The moment Sigmund hits 0 HP, he sends out a white or red shockwave. At the same time Sigmund spawns two orbs, one red and one white, at each cardinal direction (12 o'clock, 3 o'clock, 6 o'clock and 9 o'clock). For this particular mechanic, you need to assign one party member for each of the cardinal directions in order to be successful.

    //         As soon as the boss hits 0 HP, each member needs to move to their assigned position and take the red or white orb based on the color of the shockwave. If everyone manages to pick up the correct orb in time before the boss revives, you will only need to repeat this process one more time before he dies permanently.

    //         Now for the tricky part. Every time Sigmund revives, he gets stronger and his attacks will be enhanced. In addition to that, for every wrongly picked orb the boss revives with more HP. On top of that, you have to go through an additional cycle if a player interacts with the wrong orb.

    //         Tip: Don't blink at the moment of death or you might miss the color of the shockwave. Write in the party chat "w" or "r" depending on the color of the shockwave to help your party members to interact with the correct orb.

    //         Before entering the boss battleground make sure that everyone knows the core mechanics of Sigmund, this will help your party save a lot time and Combat Items. </p>
    //       <div class="break"></div>
    //       <h2>Guide Video</h2>
    //       <div className="video">
    //         <iframe width="697" height="392" src="https://www.youtube.com/embed/p8Gmc--hJ4E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <BlockPage props={"hall-of-the-twisted"}></BlockPage>
  );
}
