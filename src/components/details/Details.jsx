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
            
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Chat settings</span>
            <img src="./arrowUp.png"/>
          </div>
        </div>        
      </div>
    </div>
      


  )
}



export default Details