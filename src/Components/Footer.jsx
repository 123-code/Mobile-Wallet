import React from 'react';
import {GoMail} from 'react-icons/go';
import {AiOutlineFacebook} from 'react-icons/ai';
import {BsInstagram} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';
import{FaQuestion} from 'react-icons/fa';

const Footer = () => {
    return(
        <>
        <div>
        <h1> Footer </h1>
        <AiOutlineFacebook/> <AiFillGithub/> <BsTwitter/> <GoMail/> <BsInstagram/> <FaQuestion/>
        </div>
        
        </>

    )
}
export default Footer;