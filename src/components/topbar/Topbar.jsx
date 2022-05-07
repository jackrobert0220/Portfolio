import "./topbar.scss"
import {Mail} from '@mui/icons-material';


export default function Topbar() {
  return (
    <div className="topbar" id="topbar">
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">&lt; / &gt;</a>
              <div className="itemContainer">
                <Mail className="icon"/>
                <span>jackrobert0220@gmail.com</span>
              </div>
          </div>
          <h1>Hello</h1>
          <div className="right">This is right</div>
        </div>
    </div>
  )
}
