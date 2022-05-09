import "./works.scss"

export default function Works() {
  return (
    <div className="works" id="works">
        <div className="slider">
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src="assets/coding_page.png" alt="" />
                  </div>
                  <h2>Title</h2>
                  <p>Here are things I have worked on!!</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src="assets/gitScreen.png" alt="" />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
