import Favicon from '../assets/favicon-196x196nbg.png';
import '../App.css';
import './css/Home.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className='NavBar'>
            {/* <div className="NavBar-brand">
                <Link to="/">
                    <img className="NavBar Logo" src={Favicon} width={98} height={98} alt="Brand" />
                </Link>
            </div> */}
            <div>
                <ul className='MenuBar'>
                    <li><button><Link to="/">About Me</Link></button></li>
                    <li><button><Link to="/Projects">Projects</Link></button></li>
                    <li>
                        <Link to="/">
                            <img className="NavBar sticky brandimage" src={Favicon} width={49} height={49} alt="Brand" />
                        </Link>
                    </li>
                    <li><button><Link to="/Illustrations">Illustrations</Link></button></li>
                    <li><button><Link to="/Blogs">Blog</Link></button></li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
