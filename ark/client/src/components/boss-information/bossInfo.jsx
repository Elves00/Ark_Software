import React from "react";
import "./bossInfo.css";

export default function bossInfo() {
  return (
    <div className="infoPage">
      <div className="pageWrapper">
        <div className="dungeonTitle">
          <h1>Demon Beast Canyon Abyssal Dungeon Guide</h1>
        </div>
        <div className="poster">
          <span className="postAuthor">
            By: <b>Alex</b>
          </span>
          <div class="break"></div>
          <span className="postDate">
            Published on <b>May 1st 2022</b>
          </span>
          <div class="break"></div>
          <span className="updated">
            Last Updated On <b>May 2nd 2022</b>
          </span>
        </div>
        <img
          src="/Lost-Ark-Images/Demoncanyon1.jpg"
          alt="firstbanner"
          className="first_banner_img"
        />
        <h2>Introduction</h2>
        <p>
          Demon Beast Canyon is the first TIER 1 Abyssal Dungeon and you need to
          be at least 340 Item Level to enter this Abyssal Dungeon. This dungeon
          drops Tier 1 Accessories, Ability Stones, Engraving Books, Cards and
          materials to craft the sets Rugged Valley Launcher and Seraphic Oath
          Launcher. After clearing the dungeon, you can pay gold to get
          additional loot. The recommended Combat Items are HP Potion and
          Splendid Whirlwind Grenade. This dungeon isn’t that difficult but you
          will be introduced to a few new co-op mechanics.
        </p>
      </div>
      <div className="pageWrapper">
        <h2>First Boss: Corrupted Vazuela</h2>
        <p>
          Corrupted Vazuela has slow attack animations making it an easy boss
          battle. Vazuela spawns Blood Puddles on the ground reducing the amount
          of safe space you can stand in without taking damage. The longer this
          fight takes the more difficult it becomes. To prevent this from
          happening, it is recommended to use skills and Combat Items which
          reduce the purple Stagger bar below the Guardian's HP. Once you
          deplete the purple bar and stagger the boss, all Blood Puddles are
          removed from the battleground.
        </p>
        <h2>Special Attack Patterns and Mechanics</h2>
        <h4>Blood Puddle</h4>
        <p>
          Corrupted Vazuela locks onto a player and marks that player with a
          blue crosshair. After a short delay, the boss spits a blood puddle on
          the targeted player. Everyone standing on that puddle takes a decent
          amount of damage every second. The placement of the puddle is
          important. If you are the marked player, you need to place the blood
          puddle at the edge of the battleground. Try to overlap new puddles
          with the existing ones at the edge. These blood puddles last until the
          boss gets staggered. Misplacing the puddles and not having enough
          stagger related skills and combat items can increase the difficulty of
          this boss fight.
        </p>
        <div class="break"></div>
        <br />
        <h2>Guide Video</h2>
        <div className="video">
          <iframe
            width="698"
            height="392"
            src="https://www.youtube.com/embed/EwphDRmtx94"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="pageWrapper">
        <h2>Second Boss: Hideous Scarkril</h2>
        <p>
          Hideous Scarkrill is the second boss of Demon Beast Canyon. It's more
          agile than the first boss and enters a stealth mode a few minutes
          after the initial encounter. To remove the stealth you need to work as
          a team and force the boss to teleport to specific locations.
        </p>
        <h2>Special Attack Patterns and Mechanics</h2>
        <h4 classname="special-skill-title">Stealth Mode</h4>
        <p>
          Scarkrill enters stealth around 1-2 minutes after the start of the
          boss fight. While in this mode the boss takes reduced damage and only
          does teleport and spin attacks. At the same time, one orb spawns at
          the edge of the battleground in each cardinal direction. The only way
          to force the boss back to normal mode is to make him teleport close to
          each of the orbs and do the spin attack. When successful, the boss
          will destroy the orb with a spin attack and make it explode. This
          explosion staggers the boss for a few seconds. Use this opportunity to
          run as a team either clockwise or counterclockwise to the next orb.
          Scarkrill returns to normal mode once all 4 orb explosions hit the
          boss. Be aware that the spin attack of the boss and the orb explosion
          combined deal a decent amount of damage to the player on hit. To
          prevent this from happening, move or dodge immediately towards the
          next orb as soon as the boss teleports to the orb next to you.
        </p>
        <div class="break"></div>
        <br />
        <h2>Guide Video</h2>
        <div className="video">
          <iframe
            width="698"
            height="392"
            src="https://www.youtube.com/embed/EOT3ZIOwth4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
