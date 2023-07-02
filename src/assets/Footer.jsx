import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../styles/style-footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='link'>
        <a
          href='https://github.com/farhan688'
          target='_blank'
          rel='noreferrer'
          aria-label='github'
        >
          <FaGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/farhan-aditya/'
          target='_blank'
          rel='noreferrer'
          aria-label='linkedin'
        >
          <FaLinkedin />
        </a>
        <a
          href='https://www.instagram.com/frhn_adity/'
          target='_blank'
          rel='noreferrer'
          aria-label='instagram'
        >
          <FaInstagram />
        </a>
        <a
          href='https://api.whatsapp.com/send?phone=6285819472570'
          target='_blank'
          rel='noreferrer'
          aria-label='whatsapp'
        >
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;