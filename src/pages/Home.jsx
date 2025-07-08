import { useEffect, useState } from 'react';
import '../App.css';
import './css/Home.css';
import Card from './Card.jsx';

function Home() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`NavBar ${isSticky ? 'sticky' : ''}`}>
                <div className="NavBar-brand">
                    <img className='Logo' src='src/assets/favicon-196x196nbg.png' width={196} height={196} alt="Brand" />
                </div>
                <div>
                    <ul className='MenuBar'>
                        <li><button>About Me</button></li>
                        <li><button>Projects</button></li>
                        <li><button>Illustrations</button></li>
                        <li><button>Blog</button></li>
                    </ul>
                </div>
            </div>

            <div className="Content">
                <h3>Hi, my name is Aman Verma – I’m an artist, designer and developer from India.</h3>
                <h3>Get in touch : <a>vaman0183@gmail.com</a></h3>
                
                <br />
                <div className='Cards'>
                <Card 
                // image=""
                description="News App"
                />
                <Card 
                // image=""
                description="Movies App"
                />
                <Card 
                // image=""
                description="Code Editor"
                />
                </div>
            </div>
        </>
    );
}

export default Home;
