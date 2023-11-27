import './Home.scss'
import Navbar from '../Navbar/Navbar.jsx'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <p className="text-danger">Homepage</p>
      </div>
    </>
  )
}

export default Home