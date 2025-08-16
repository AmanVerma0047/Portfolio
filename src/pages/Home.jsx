import '../App.css';
import './css/Home.css';
import './css/Card.css';
import Card from './Card.jsx';
import SocialMedia from './SocialMedia.jsx';
// import NavBar from './NavBar.jsx';

function Home() {
    return (
        <><div className='Home'>
            {/* <NavBar /> */}
            <div className="Content">
                <h3>Hi, my name is Aman Verma – I’m an artist, designer and developer from India.</h3>
                <h3>Get in touch : <a>vaman0183@gmail.com</a></h3>
                <br />
                <div className='Cards'>
                <Card 
                description="3d/2D Artist"
                />
                <Card 
                description="Product Design"
                />
                <Card 
                description="Programmer"
                />
                </div>
                <br />
                <br />
                <br />
                <SocialMedia />
                <br />
                <br />
                {/* <div className='Copyright'>© Aman Verma 2025</div> */}
            </div>
            </div>
        </>
    );
}

export default Home;
