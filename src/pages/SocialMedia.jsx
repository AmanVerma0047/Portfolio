import { useState, useEffect } from 'react'
import './css/SocialMedia.css'
import email_img from '../assets/email.svg';
import links_img from '../assets/links.svg';

function SocialMedia() {
    const [isEmail, setisEmail] = useState(false);
    const [isGithub, setisGithub] = useState(false);

    function handleEmail(){
        setisEmail(true)
    }

    function nothandleEmail(){
        setisEmail(false)
    }

    function handleGithub(){
        setisGithub(true)
    }

    function nothandleGithub(){
        setisGithub(false)
    }


    return <div className="SocialMediaLinks">
        <div className="Icons">
            <img className="Icons-img" src={email_img} alt="email" onMouseOver={handleEmail} onMouseLeave={nothandleEmail}></img>
            <img className="Icons-img" src={links_img} alt="email" onMouseOver={handleGithub} onMouseLeave={nothandleGithub} ></img>
        </div>
        <div className='Dialogbox'>
            <p className={`EmailText ${isEmail ? 'Email' : 'notisEmail'}`}>Email:kirisoft@gmail.com</p>
            <p className={`GithubText ${isGithub ? 'Github' : 'notisGithub'}`}>Github:Amanverma0047</p>
        </div>

    </div>
}

export default SocialMedia