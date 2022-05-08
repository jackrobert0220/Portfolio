import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList";
import { useEffect, useState } from "react"
import { featuredPortfolio } from "../../data"
// import GitHubIcon from '@mui/icons-material/GitHub';
// import TouchAppIcon from '@mui/icons-material/TouchApp';


export default function Portfolio() {

  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    // For Future Projects
    // {
    //   id: "featured",
    //   title: "Featured",
    // },
    // {
    //   id: "games",
    //   title: "Games",
    // },
    // {
    //   id: "social",
    //   title: "Social",
    // },
  ];

  useEffect(() => {
    switch(selected){
      case "featured":
        setData(featuredPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected])

  return (
    <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
          {list.map((item) => (
            <PortfolioList 
              title={item.title}  
              active={selected ===item.id} 
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>
        <div className="container">
        {data.map((d) => (
          <div className="item">
            <img 
                src={d.img}
                alt=""/>
            <h3>{d.title}</h3>
            {/* <TouchAppIcon className="iconApp"
              onClick={() => window.open(`${d.link}`, "_blank")}
            /> */}
            {/* <GitHubIcon className="iconGit"/> */}
          </div>
        ))}
        </div>
    </div>
  )
}
