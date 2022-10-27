import { Link } from 'react-router-dom'
import './register.scss'

const Register = () => {
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
            <h1>Social World.</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit quidem possimus perspiciatis aliquid eius facilis iure ullam nisi eveniet delectus dolor voluptas facere</p>
            <span>Do You have an account?</span>
            <Link to="/login">
            <button>Login</button>
            </Link>  

        </div>
        <div className="right">
        <h1>Register</h1>
        <form>
            <input type="text" placeholder='Username' />
            <input type="email" placeholder='Email' />
            <input type="text" placeholder='username' />
            <input type="text" placeholder='Full Name' />
            <input type="password" placeholder='Password' />
            <button>Register</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Register
