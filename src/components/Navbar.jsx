import './Navbar.css';
import { MdDarkMode } from "react-icons/md";
import { BsBrightnessHigh } from "react-icons/bs";
import { IoSpeedometerOutline } from "react-icons/io5";

function Navbar(props) {
    return (
        <div className={`navbar ${props.dabba ? "dark" : ""}`}>
            <h1><IoSpeedometerOutline /> SpeedoType</h1>
            <div className='nav-right'>
                <p className="best-text">Best Score: <span className="best-score">{props.best}</span></p>
                <button className='theme-toggle' onClick={props.changeTheme}>
                    {props.dabba ? <BsBrightnessHigh /> : <MdDarkMode />}
                </button>
            </div>
        </div>
    );
}

export default Navbar;
