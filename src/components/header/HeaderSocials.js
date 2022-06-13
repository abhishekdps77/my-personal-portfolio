import React from 'react';
import {BsLinkedin,BsGithub,BsInstagram} from 'react-icons/bs';
import {SiLeetcode} from 'react-icons/si'
import './headerSocials.css'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    <a href="https://www.linkedin.com/in/abhishek-singh-20428b201/" target="_blank" rel="noreferrer"><BsLinkedin className='header__socials-icon'/></a>
    <a href="https://github.com/abhishekdps77" target="_blank" rel="noreferrer"><BsGithub className='header__socials-icon'/></a>
    <a href="https://leetcode.com/abhisheknsit77/" target="_blank" rel="noreferrer"><SiLeetcode className='header__socials-icon'/></a>
    <a href="https://www.instagram.com/abhi.shek.77/" target="_blank" rel="noreferrer"><BsInstagram className='header__socials-icon'/></a>
    </div>
  )
}

export default HeaderSocials