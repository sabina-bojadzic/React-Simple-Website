import React from "react";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import "./styles.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import MessageIcon from "@material-ui/icons/Message";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import TodayIcon from "@material-ui/icons/Today";

function Menu() {
  return (
    <div className="menu">
      <div className="menu-item">
        <Link to="/main">
          <HomeIcon /> Home
        </Link>
      </div>
      <div className="menu-item">
        <Link to="/about">
          <AccountCircleIcon /> About Me
        </Link>
      </div>
      <div className="menu-item">
        <Link to="/message">
          <MessageIcon /> Send Message
        </Link>
      </div>
      <Popup
        trigger={
          <div className="menu-item">
            <ThumbUpIcon /> Usefull Sites{" "}
          </div>
        }
        position="right top"
        on="hover"
        closeOnDocumentClick
        mouseLeaveDelay={300}
        mouseEnterDelay={0}
        contentStyle={{ padding: "0px", border: "none" }}
        arrow={false}
      >
        <div className="side">
          <div className="menu-item">
            <a className="item" href="https://www.transparenttextures.com/">
              Transparent Textures
            </a>
          </div>

          <div className="menu-item">
            <a
              className="item"
              href="http://www.mashup-template.com/templates.html"
            >
              HTML/CSS Templates
            </a>
          </div>
          <div className="menu-item">
            <a href="https://animate.style/">Animate CSS</a>
          </div>
          <div className="menu-item">
            <a className="item" href="https://startbootstrap.com/themes/">
              Free Bootstrap Templates
            </a>
          </div>
          <div className="menu-item">
            <a className="item" href="https://mdbootstrap.com/freebies/">
              Free Bootstrap Templates 1
            </a>
          </div>
        </div>
      </Popup>
      <div className="menu-item">
        <Link className to="/calendar">
          <TodayIcon /> Calendar
        </Link>
      </div>
    </div>
  );
}

export default Menu;
