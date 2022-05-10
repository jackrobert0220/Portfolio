import "./testimonials.scss"

export default function Testimonials() {

  const data = [
    {
      id: 1,
      name: "Nat Z.",
      title: "Full Stack Software Engineer",
      img: "./assets/nat.jpeg",
      icon: "./assets/linkedin.png",
      desc: "Jack was such a pleasure to work with! He's very hardworking, patient, flexible, and has excellent communication skills. We were able to achieve all of our initial goals well before the deadline. This was a great experience and I would welcome having Jack as a teammate again!",
      featured: true,
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
        <h1>Testimonials</h1>
        <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/arrow.png" className="left" alt="" />
              <img src={d.img} className="user" alt="" />
              <img src={d.icon} className="right" alt="" />
            </div>
            <div className="center">
            {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
          ))}
        </div>
    </div>
  )
}
