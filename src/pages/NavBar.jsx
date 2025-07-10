import { useEffect, useState } from 'react';
import Favicon from '../assets/favicon-196x196nbg.png';
import '../App.css';
import './css/Home.css';
import { Link } from 'react-router-dom';

function NavBar() {
    const [isSticky, setIsSticky] = useState(false);
    const [isScroll,setIsScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsSticky(true);
                setIsScroll(true);
            } else {
                setIsSticky(false);
                setIsScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className='NavBar'>
                <div className="NavBar-brand">
                    <Link to="/">
                        <img className={`NavBar ${isScroll? 'Logo-hide':'Logo'}`} src={Favicon} width={196} height={196} alt="Brand" />
                    </Link>
                </div>
                <div>
                    <ul className='MenuBar'>
                        <li><button> <Link to="/">About Me</Link></button></li>
                        <li><button><Link to="/Projects">Projects</Link></button></li>
                        <li> <Link to="/"><img className={`NavBar ${isSticky ? 'sticky' : 'nosticky'}`} src={Favicon} width={98} height={98} alt="Brand" /></Link></li>
                        <li><button><Link to="/Illustrations">Illustrations</Link></button></li>
                        <li><button><Link to="/Blogs">Blog</Link></button></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default NavBar;
