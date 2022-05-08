import "./portfolioList.scss"

export default function PortfolioList({ id, title, link, active, setSelected }) {
  return (
    <li 
        className={active ? "portfolioList active" : "portfolioList"}
        onClick={() => setSelected(id)}
    >  
    {title}
    </li>
  );
}
