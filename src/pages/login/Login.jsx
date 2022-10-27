import { Link } from 'react-router-dom'
import './login.scss'

const Login = () => {
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
            <button>Login</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Login
