import React from "react";
import "./SongPlayer.css";

export default function SongPlayer() {
  return (
    <div className="player">
      <div className="song">
        <img src="./images/user.png" alt="Song image" />
        <div className="text">
          <h3>...</h3>
          <h4>...</h4>
        </div>
        <div className="like">
          <i className="fa-regular fa-heart"></i>
        </div>
      </div>
      <div className="controls">
        <div className="buttons">
          <i className="fa-solid fa-shuffle button"></i>
          <i className="fa-solid fa-backward-step button"></i>
          <span className="fa-stack fa-1x pause button">
            <i className="fa-solid fa-circle fa-stack-2x"></i>
            <i className="fa-solid fa-play fa-stack-1x"></i>{" "}
          </span>
          <i className="fa-solid fa-forward-step button"></i>
          <i className="fa-solid fa-repeat button"></i>
        </div>
        <div className="playback-bar">
          <div className="playback-position">0:10</div>
          <div className="playback-progressbar">
            <div className="progress--bar" style="--progress-bar-width: 10%">
              <div className="progress--bar-bg">
                <div className="bg">
                  <div className="bar"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="playback-duration">3:10</div>
        </div>
      </div>
      <div className="actions">
        <i className="fa-solid fa-list"></i>
        <i className="fa-solid fa-computer"></i>
        <i className="fa-solid fa-volume-high"></i>

        <div className="volume-bar">
          <div className="progress--bar">
            <div className="progress--bar-bg">
              <div className="bg"></div>
              <div className="fg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
