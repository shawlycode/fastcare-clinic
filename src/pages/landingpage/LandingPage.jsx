import './landingpage.css'
import Login from '../login/Login'

const LandingPage = () => {
  return (
    <div className='landing__page'>
      <div className="left__container">
        <h1>Welcome to Fastcare clinic</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet a sunt in deserunt rerum nemo porro est et ab tenetur, aliquid quibusdam doloremque consequuntur voluptatem, placeat, modi suscipit ad laboriosam.
          Quibusdam ipsa vel officia quas facere </p>
      </div>
      <div className="right__container">
        <Login />
      </div>
    </div>
  )
}

export default LandingPage
