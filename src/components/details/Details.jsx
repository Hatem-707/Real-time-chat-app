import "./details.css"

const Details = () => {
  return (
    <div className='details'>
      <div className="user">
        <img src="./avatar.png" alt=""/>
        <h2>User name</h2>
        <p>User description</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat settings</span>
            <img src="./arrowUp.png"/>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png"/>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png"/>
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./ocean.webp" alt="" />
                <span>photo_name.png</span>
              </div>
            <img src="./download.png" alt="" className="icons"/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./ocean.webp" alt="" />
                <span>photo_name.png</span>
              </div>
            <img src="./download.png" alt="" className="icons"/>
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared files</span>
            <img src="./arrowUp.png"/>
          </div>
        </div>   
        <button>Block user</button>     
      </div>
    </div>
      


  )
}



export default Details