import './landingpage.css'
import { useNavigate } from 'react-router-dom';
import floids from '../../floids.gif'

const LandingPage = () => {


  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault()
    navigate('/login')

  }
  return (
    <div className="container">
      <div className='landing__page'>
        <div className="left__container">
          <h1>Welcome to Fastcare clinic</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet a sunt in deserunt rerum nemo porro est et ab tenetur, aliquid quibusdam doloremque consequuntur voluptatem, placeat, modi suscipit ad laboriosam.
            Quibusdam ipsa vel officia quas facere </p>
          <div className="btn__container">
            <button type="button" class="btn btn-warning" onClick={handleLogin}>Login</button>

          </div>
        </div>
        <div className="right__container">
          <div className="header__right-profile">
            {/* <video src={video} loop={Infinity} autoPlay={true} width="100%" controls={false}
            /> */}
            <img src={floids} alt="" />

          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
