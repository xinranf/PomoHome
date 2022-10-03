import { useState } from "react"
import Pomodoro from "../components/Pomodoro"

const Start = () => {
    const [money, setMoney] = useState(JSON.parse(localStorage.getItem('user')).user.money);
    return (
        <div className="start">
            <div className="start-icons">
                <div className="money">
                    <img src="/money.png" alt="money" />
                    <div><p>{money}</p></div>
                </div>
                <div className="home-img">
                    <img src="/home.png" alt="home" />
                </div>
            </div>
            <div className="pomo-block">
                <Pomodoro />
            </div>


        </div>
    )
}

export default Start