import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faHashnode, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="samuel" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                    target="_blank" 
                    rel='noreferrer' 
                    href='https://www.linkedin.com/in/samuel-nwanwobi'>
                   <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a 
                    target="_blank" 
                    rel='noreferrer' 
                    href='https://www.github.com/SammyBloom'>
                   <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a 
                    target="_blank" 
                    rel='noreferrer' 
                    href='https://www.twitter.com/SCNBloom'>
                   <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a 
                    target="_blank" 
                    rel='noreferrer' 
                    href='https://hashnode.com/@SammyBloom'>
                   <FontAwesomeIcon icon={faHashnode} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a 
                    target="_blank" 
                    rel='noreferrer' 
                    href='https://www.youtube.com/channel/UCdt0x57QbHJ2pa0sWVnPZTA'>
                   <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar