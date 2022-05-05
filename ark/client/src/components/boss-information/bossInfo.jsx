import React from 'react';
import './bossInfo.css';

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
                    src="/Demoncanyon1.jpg"
                    alt="firstbanner"
                    className="first_banner_img"
                />
                <h2>Introduction</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                /* add coloured text for names */
            </div>
            <div className="pageWrapper">
                <h2>First Boss: Corrupted Vazuela</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                /* add coloured text for names */
                <h3 className="attackpatterns">
                    <span class="blue-sub-title">
                        Special Attack Patterns and Mechanics
                    </span>
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                /*** add coloured text and insert youtube video. May add drop
                down bar to change which pattern to view***/
                <div class="break"></div>
                <h2>Guide Video</h2>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="rick_roll"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
            <div className="pageWrapper">
                <h2>Second Boss: Hideous Scarkril</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                /* add coloured text for names */
                <h3 className="attackpatterns">
                    <span class="blue-sub-title">
                        Special Attack Patterns and Mechanics
                    </span>
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                /*** add coloured text and insert youtube video ***/
                <div class="break"></div>
                <h2>Guide Video</h2>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="rick_roll"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    );
}
