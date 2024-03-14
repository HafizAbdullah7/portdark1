import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import './Footer.scss';

const Footer = () => {
  const mode = useSelector(state => state.darkMode.mode);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className={`${mode==='light'?'heada-text2':'heada-text'}`}>Hire me & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:hafizab200@gmail.com" className="p-text">hafizab200@gmail.com</a>
        </div>
        <div className={`app__footer-card ${mode==='light'?'dd':'ll'}`}>
          <img src={images.mobile} alt="phone" />
          <a href="tel:0334-0596908" className={`${mode==='light'?'p-text2':'p-text'}`}>0334-0596908</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className={`${mode==='light'?'app__footer-formdk':'app__footer-form'} app__flex`}>
          <div className="app__flex">
            <input className="pa-text2" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className={`${mode==='light'?'heada-text2':'heada-text'}`}>
            Thank you for getting in touch!
          </h3>
        </div>
      )}

<div  className="app__social1 ">
    
    <div ><a href="https://x.com/HAbdullah64120?t=A4DtAJ3RCYzHm_adImU8AQ&s=08" target="_blank" rel="noopener noreferrer">
      <BsTwitter />
    </a></div>
    
    <div><a href="https://www.facebook.com/profile.php?id=100026931456532&mibextid=gjUFcU" target="_blank" rel="noopener noreferrer">
    <FaFacebookF />
  </a></div>
    <div><a href="https://instagram.com/hafizabdullah685?igshid=NzZlODBkYWE4Ng==" target="_blank" rel="noopener noreferrer">
      <BsInstagram /></a>
    </div></div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
