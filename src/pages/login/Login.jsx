import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import './login.scss'

const Login = () => {
  const {login} = useContext(AuthContext)
  
  const handleLogin =  () => {
    try {
      login();
    } catch (e){
      console.log(e)
    }
  }


  return (
    <div className='login'>
      <div className="card">
        <div className="left">
            <h1>Hello World.</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit quidem possimus perspiciatis aliquid eius facilis iure ullam nisi eveniet delectus dolor voluptas facere</p>
            <span>Don't You have an account?</span>
            <Link to="/register">       
            <button>Register</button>
            </Link>
        </div>
        <div className="right">
        <h1>Login</h1>
        <form>
            <input type="text" placeholder='username' />
            <input type="password" placeholder='password' />
            <button onClick={handleLogin}>Login</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Login
