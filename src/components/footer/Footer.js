import React from 'react';
import './footer.css';
import {FaInstagram,FaTwitter} from 'react-icons/fa'
import {SiCodingninjas,SiGeeksforgeeks,SiGithub,SiLeetcode} from 'react-icons/si'
import {BiUpArrowCircle} from 'react-icons/bi'


const Footer = () => {
  return (
    <footer>
    {/* <a href="#" className='footer__logo'>Abhishek Singh</a> */}

    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#qualification">Qualification</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Certificates</a></li>
      <li><a href="#contact">Contact Me</a></li>
    </ul>

    <div className="footer__socials">
      <a href="https://github.com/abhishekdps77?tab=repositories" target='_blank'><SiGithub className='footer__socials-icon'/></a>
      <a href="https://www.instagram.com/abhi.shek.77/" target='_blank'><FaInstagram className='footer__socials-icon'/></a>
      <a href="https://www.instagram.com/abhi.shek.77/" target='_blank'><SiLeetcode className='footer__socials-icon'/></a>
      <a href="https://twitter.com/abhishekdps77" target='_blank'><FaTwitter className='footer__socials-icon'/></a>
      <a href="https://www.codingninjas.com/codestudio/profile/f3e4f1fd-da00-4334-b5e1-6828e8325049" target='_blank'><SiCodingninjas className='footer__socials-icon'/></a>
      <a href="https://auth.geeksforgeeks.org/user/abhishekdps77/profile" target='_blank'><SiGeeksforgeeks className='footer__socials-icon'/></a>
    </div>

    <div className="footer__copyright">
      <h4>Made with &#10084; and 🍺</h4>
      <h4><strong>© Abhishek Singh</strong></h4>
    </div>

    <a href='#' className='footer__uparrow'>
      <BiUpArrowCircle/>
    </a>
    </footer>
  )
}

export default Footer