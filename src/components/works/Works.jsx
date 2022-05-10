  import { useState } from 'react'
  import "./works.scss"

export default function Works() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: 1,
      icon: "./assets/react.png",
      title: "React Chat App w/ Socket.io",
      desc: "A chat application that renders data in realtime using socket.io.",
      img: 
          "https://user-images.githubusercontent.com/91999893/166125492-5dc649c3-5427-4c93-8399-757c9fe47659.png",
  },
  {
      id: 2,
      icon: "./assets/django.png",
      title: "Django Guitars",
      desc: "A site built with Django where users may share their guitar collection using the PostgresQl database.",
      img: 
          "https://user-images.githubusercontent.com/91999893/167305895-5f1f7091-8da6-4b8d-9001-734f564113d1.png",
  },
  {
      id: 3,
      icon: "./assets/react.png",
      title: "Sappling Social Media App",
      desc: "A social media app with full CRUD capabilities.",
      img: "https://user-images.githubusercontent.com/91999893/167305992-d70bb687-b33e-4c1e-a132-6185c6e1446d.png",
},
  ];

  const handleClick = (way) => {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
    setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <>
    <div className="works" id="works">
        <div className="slider" 
              style={{ transform:`translateX(-${currentSlide * 100}vw)` }}>
          {data.map(d => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Featured Works</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
            
          </div>))}
        </div>
        <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
        <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick("right")} />
    </div>
    </>
  )
}
