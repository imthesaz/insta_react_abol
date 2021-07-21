import React from "react";
import "./Story.css";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  
    large: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    }, 
  }));

function Story() {
    const classes = useStyles();

  return (
    <div className="story">
      <div className="story__item">
        <Avatar
          className="avatar"
          alt="Abol"
          src="https://i.ibb.co/8gsg9rd/photo-2021-07-20-19-14-33.jpg"
          className={classes.large}
        />
        <h7>Abol</h7>
      </div>

      <div className="story__item">
        <Avatar
          className="avatar"
          alt="hojjat"
          src="https://i.ibb.co/gPDkgMJ/photo-2020-04-01-01-30-37.jpg"
          className={classes.large}
        />
        <h7>HOJJAt</h7>
      </div>

      <div className="story__item">
        <Avatar
          className="avatar"
          alt="abolfazl"
          src="https://i.ibb.co/YPVMmjq/photo-2021-04-04-15-41-41.jpg"
          className={classes.large}
        />
        <h7>abolfaaazzzl</h7>
      </div>

      <div className="story__item">
        <Avatar
          className="avatar"
          alt="Abolesabz"
          src="https://i.ibb.co/9TQ2wZy/photo-2021-01-01-22-13-12.jpg"
          className={classes.large}
        />
        <h7>abolfaaazzzleZarghaaa</h7>
      </div>
     
    </div>
  );
}

export default Story;