
import "./App.css";
import Post from "./Post";
import Story from "./Story";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import Suggestion from "./Suggested";
import HomeIcon from '@material-ui/icons/Home';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';





function App() {

  

  return (
    <div className="App">

      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="instagram"
        />

        <div className="searchForm">
          <form>
            <SearchIcon className="searchIcon" fontSize="small" />
            <input type="text" id="filter" placeholder="Search" className="searchBarInput"/>
          </form>
        </div>

        <div className="header_icons">
          <Button>
          <HomeIcon fontSize="large" className="header_icon"/>
          </Button>
          <Button>
          <NearMeOutlinedIcon fontSize="large" className="header_icon"/>
          </Button>
          <Button>
          <ExploreOutlinedIcon fontSize="large" className="header_icon"/>
          </Button>
          <Button>
          <FavoriteBorderOutlinedIcon fontSize="large" className="header_icon" />
          </Button>
        </div>
      </div>


      <Suggestion />

      <Story />
      
      

      <Post imageUrl = "https://i.ibb.co/9TQ2wZy/photo-2021-01-01-22-13-12.jpg" caption = "HOOO" username="AyeHashmey" />
      

      
    </div>
  );
}

export default App;