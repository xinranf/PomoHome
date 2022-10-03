import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Home = () => { 
    return (
        <div className="home">
            {/* <img src="https://picsum.photos/id/128/500/500"/> */}
            <img src="/home.png" alt="image" />
            <div className="intro-box">
                <h2>Get focused to decorate your home!</h2>
                <div className="intro-text">
                Pomodoro Home is a productivity app that uses gamification to help you get focused with the Pomodoro Technique. By completing each pomodoro timer, you'll earn money according to the time focused. You will have the chance to buy new furnitures in Store page, and apply them to your home at Decor page.
                </div>
                <div className="account">
                        {/* <button onClick={}>
                            Login / Sign up
                        </button> */}
                    <Link to="/login" className="btn">Login</Link>
                    <Link to="/signup" className="btn">Sign up</Link>
                </div>
            </div>
           
        </div>
        
    )
 }

 export default Home;