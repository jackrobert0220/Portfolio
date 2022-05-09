import "./contact.scss";
import {Mail} from '@mui/icons-material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Contact() {

  return (
    <div className="contact" id="contact">
        <div className="left">
          <img src="assets/dev.svg" alt="" />
        </div>
        <div className="right">
          <h2>Contact Me...</h2>
            <div className="emailContainer">
            <Mail className="icon"
                    onClick={() => 
                            window.open(`mailto:jackrobert0220@gmail.com`, "_blank")}
                  />
            <span className="email" onClick={() => 
                      window.open(`mailto:jackrobert0220@gmail.com`, "_blank")}>jackrobert0220@gmail.com</span>
            </div>         
            <div className="instaContainer">
              <LinkedInIcon className="icon"
                      onClick={() => 
                              window.open(`https://www.linkedin.com/in/jack-glazer/`, "_blank")}
                    />
              <span onClick={() => 
                              window.open(`https://www.linkedin.com/in/jack-glazer/`, "_blank")}>Jack Glazer</span>
            </div>
            <div className="twitterContainer">
              <GitHubIcon className="icon"
                      onClick={() => 
                              window.open(`https://github.com/jackrobert0220`, "_blank")}
                    />
              <span onClick={() => 
                              window.open(`https://github.com/jackrobert0220`, "_blank")}>Jack Glazer</span>
            </div> 
            <div className="twitterContainer">
              <TwitterIcon className="icon"
                      onClick={() => 
                              window.open(`https://twitter.com/jackglazzzer`, "_blank")}
                    />
              <span onClick={() => 
                              window.open(`https://twitter.com/jackglazzzer`, "_blank")}>jackglazzzer</span>
            </div> 
            <div className="instaContainer">
              <InstagramIcon className="icon"
                      onClick={() => 
                              window.open(`https://instagram.com/jackglazzzer`, "_blank")}
                    />
              <span onClick={() => 
                              window.open(`https://instagram.com/jackglazzzer`, "_blank")}>jackglazzzer</span>
            </div> 
        </div>
    </div>
  )
}
