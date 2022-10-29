import './profile.scss'
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Instagram from '@mui/icons-material/Instagram';
import Posts from "../../components/posts/Posts"
const Profile = () => {
  return (
    <div className='profile'>
      <div className="images">
        <img className='cover' src="https://images.pexels.com/photos/1482193/pexels-photo-1482193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt="" />
        <img className='profile' src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=400"  alt="" />
      </div>
      <div className="profileContainer">
        <div className="userInfo">
          <div className="left">
            <a href="https://facebook.com">
              <FacebookTwoToneIcon fontSize='medium'/>
            </a>
            <a href="https://instagram.com">
              <InstagramIcon fontSize='medium'/>
            </a>
            <a href="https://twitter.com">
              <TwitterIcon fontSize='medium'/>
            </a>
            <a href="https://linkedin.com">
              <LinkedInIcon fontSize='medium'/>
            </a>
            <a href="https://pinterest.com">
              <PinterestIcon fontSize='medium'/>
            </a>
          </div>
          <div className="center">
            <span> Haj Sriha</span>
            <div className="info">
              <div className="item">
                <PlaceIcon/>
                <span>Mestir City </span>
              </div>
              <div className="item">
                <LanguageIcon/>
                <span>Hymndrazill </span>
              </div>
            </div>
            <button>Follow</button>

          </div>
          <div className="right">
            <EmailOutlinedIcon/>
            <MoreVertIcon/>
          </div>
        </div>
      </div>
      <Posts/>

    </div>
  )
}

export default Profile 
