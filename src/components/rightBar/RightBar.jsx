import React from 'react'
import "./rightbar.scss"
const RightBar = () => {
  return (
    <div className='rightbar'>
      <div className="container">
        <div className="item">
          <span>Suggestions for you</span>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/1255061/pexels-photo-1255061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                  <span>Jane doe</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Delete</button>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default RightBar
