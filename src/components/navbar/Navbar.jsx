import "./navbar.scss"
import logo from './Yo.jpeg'; 

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">
          <div className="item">
            <img 
              src={logo} alt="" className="avatar" 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar