
import './login.css'
import { useNavigate } from 'react-router-dom';
import floids from '../../login.png'
import logo from '../../fcclogo.png'


const Login = () => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault()
    navigate('/')

  }
  return (

    <section>
      <div className="container ">
        <div className="form__container">
          <div className="logo__container">
            <img src={logo} alt="logo" className='logo' />
          </div>
          < form onSubmit={handleLogin}>
            <h4>Sign up </h4>
            <p>
              Please note that you must be a registered user to get access to the FastCare Subscription system. Please contact systems administrator for your credentials
              .</p>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>

            <button type="submit" class="btn btn-primary">Login</button>
          </ form>
        </div>
        <div className="form__right">
          <img src={floids} alt="" />
        </div>
      </div>
    </section>


  )
}

export default Login;
