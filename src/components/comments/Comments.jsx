import { useContext } from "react"
import {AuthContext } from "../../context/authContext"
import "./comments.scss"
const Comments = () => {
    const {currentUser} = useContext(AuthContext)
    const comments = [
        {
            id:1,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quos!",
            name: "Firas Sriha",
            userId: 1,
            profilePicture: "https://images.pexels.com/photos/1255061/pexels-photo-1255061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id:2,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quos!",
            name: "Kamel Sriha",
            userId: 2,
            profilePicture: "https://images.pexels.com/photos/1255061/pexels-photo-1255061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
    
    ]
  return (
    <div className="comments">
        <div className="write">
            <img src={currentUser.profilePicture} alt="" />
            <input type="text" placeholder="Leave your comment here." />
            <button>Comment</button> 
        </div>
     { comments.map(comment =>(
        <div className="comment" key={comment.id}>
            <img src={comment.profilePicture} alt="" />
            <div className="info">
                <span> {comment.name}</span>
                <p>{comment.desc}</p>
            </div>
            <span className="date">1 hour ago.</span>
        </div>
      ))}
    </div>
  )
}

export default Comments
