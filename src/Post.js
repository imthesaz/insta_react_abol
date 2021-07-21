import { Avatar } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "./Post.css";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import NearMeOutlinedIcon from "@material-ui/icons/NearMeOutlined";
import TurnedInNotOutlinedIcon from "@material-ui/icons/TurnedInNotOutlined";

import Button from "@material-ui/core/Button";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

function Post({ imageUrl , username, caption  }) {



  return (
    <div className="post">
 
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="subhampreet"
          src="https://i.ibb.co/WKyBCRd/photo-2020-01-25-18-54-04.jpg"
        />

        <h3>{username}</h3>
        <div className="MoreHorizIcon">
          <MoreHorizIcon />
        </div>
      </div>

      
      <img className="post__image" src={imageUrl} />


      <div className="do">
      <FormControlLabel 
        control={<Checkbox icon={<FavoriteBorder className = "like"/>} 
                  checkedIcon={<Favorite />}
          name="checkedH" />}
        label=""
      />
        <Button>
        <ModeCommentOutlinedIcon className="do1" fontSize="medium" />
        </Button>
        <Button>
        <NearMeOutlinedIcon className="do1" fontSize="medium" />
        </Button>
        <Button>
        <TurnedInNotOutlinedIcon
          className="item-save"
          fontSize="medium"
        />
        </Button>
      </div>

      <h5 className="post__text">
        {" "}
        <strong>{username} </strong>
        {caption}
      </h5>

      <form className="postComment">
          <input
            className="comment_input"
            type="text"
            placeholder="Add a comment..."
            
          />
          <Button
            className="comment_button"
            type="submit"
          >
            Post
          </Button>
        </form>
      
    </div>
  );
}

export default Post;