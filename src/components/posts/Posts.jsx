import Post from '../post/Post'
import './posts.scss'

const Posts = () => {
  const posts = [
    {
      id:1,
      name:"Firas Sriha",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/1255061/pexels-photo-1255061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, explicabo?",
      img: "https://images.pexels.com/photos/1255061/pexels-photo-1255061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id:2,
      name:"Firas Sriha",
      userId: 2,
      profilePic: "https://images.pexels.com/photos/1255061/pexels-photo-1255061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, explicabo?",
      img: "https://images.pexels.com/photos/1255061/pexels-photo-1255061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id:3,
      name:"Belsem Sriha",
      userId: 3,
      profilePic: "https://images.pexels.com/photos/1255061/pexels-photo-1255061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, explicabo?",
      img: "https://images.pexels.com/photos/1255061/pexels-photo-1255061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id:4,
      name:"Kamel Sriha",
      userId: 4,
      profilePic: "https://images.pexels.com/photos/1255061/pexels-photo-1255061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, explicabo?",
      img: "https://images.pexels.com/photos/1255061/pexels-photo-1255061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

  ]
  return (
    <div className='posts'>
      {posts.map(post=>(
      <Post post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default Posts
