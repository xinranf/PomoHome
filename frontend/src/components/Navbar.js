import { Link, redirect } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const {logout} = useLogout()
    const navigate = useNavigate()
    const handleClick = () => {
      logout()
      navigate("/")
    }
    const user = JSON.parse(localStorage.getItem('user'))
  
    return (
      <header>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
        <div className="container">
            <div id='logo'>
                <img src={require("./tomato.png")} alt="logo" />
                <Link to="/">
                    <h1>Pomodoro Home</h1>
                </Link>
            </div>
          <nav>
            <div>
                {!user && (<Link to="/">Home</Link>)}
                {user && (<Link to="/start">Start</Link>)}
                <Link to="/store">Store</Link>
                <Link to="/decor">Decor</Link>
                <Link to="/setting">Setting</Link>
                {user && <button onClick={handleClick}>Log out</button>}
            </div>
          </nav>
        </div>
      </header>
    )
  }
  
  export default Navbar