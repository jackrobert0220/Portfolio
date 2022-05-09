import "./topbar.scss"
import {Mail} from '@mui/icons-material';


export default function Topbar( { menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">&lt;/&gt;</a>
              <div className="itemContainer">
                <Mail className="icon"
                  onClick={() => 
                          window.open(`mailto:jackrobert0220@gmail.com`, "_blank")}
                />
                <span classNasme="email" onClick={() => 
                          window.open(`mailto:jackrobert0220@gmail.com`, "_blank")}>jackrobert0220@gmail.com</span>
              </div>
          </div>

          <div className="right">
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
    </div>
  )
}
