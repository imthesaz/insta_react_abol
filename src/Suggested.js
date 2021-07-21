import React from "react";
import "./Suggested.css";
import { Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  large: {
    width: theme.spacing(6.0),
    height: theme.spacing(6.0),
  },
}));

function Suggested() {
  const classes = useStyles();

  const [buttonText1, setButtonText1] = useState("Follow");
  const [buttonText2, setButtonText2] = useState("Follow");
  const [buttonText3, setButtonText3] = useState("Follow");


  
  

  return (
    <div className="suggested">

    <div className = "headofsuggest">
      <div className="myProfile">
        <Avatar
          className="avatar"
          alt="Bhuban_Bam"
          className={classes.large}

          />
      </div>
      <div className = "myProfileName" >
        <h5> me </h5>
      </div>

      <div className = "about" >yooohooo</div>
      
      <div className = "switch">
        <Button className = "switchButton" > switch </Button>
      </div>
    </div>


    <div className ="suggestBar" >
      <div className ="suggestfoyou" >Suggestions For You</div>
      <Button className = "seeAll">See All</Button>
    </div>
      <div className="footer">
        <Avatar
          className="avatar"
          alt="user1"
          src=""
        />

        <div className="footer_content">
          <h5>user1</h5>
        </div>
        <a href="">
          <Button
            size="small"
            className="footer_follow"
            onClick={() => setButtonText1("Followed")}
          >
            {buttonText1}
          </Button>
        </a>
      </div>

      <div className="footer">
        <Avatar
          className="avatar"
          alt="user2"
          src=""
        />

        <div className="footer_content">
          <h5>user2</h5>
        </div>
        <a href="">
          <Button
            size="small"
            className="footer_follow"
            onClick={() => setButtonText2("Followed")}
          >
          {buttonText2}

          </Button>
        </a>
      </div>

      <div className="footer">
        <Avatar
          className="avatar"
          alt="user3"
          src=""
        />

        <div className="footer_content">
          <h5>user3</h5>
        </div>
        <a href="">
          <Button
            size="small"
            className="footer_follow"
            onClick={() => setButtonText3("Followed")}

          >
             {buttonText3}
          </Button>
        </a>
        
      </div>

      <div className = "footerBot">
          <nav className = "Abouts">
            <ul className = "Aboutss" >
              <li>About</li>
              <li>Help</li>
              <li>Press</li>
              <li>API</li>
              <li>Jobs</li>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Locations</li>
              <li>Top Accounts</li>
              <li>Hashtags</li>
              <li>Language</li>
            </ul>
          </nav>
          <span>© 2021 Instagram from Facebook</span>
        </div>

    </div>
  );
}

export default Suggested;