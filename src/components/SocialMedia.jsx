import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div><a href="https://x.com/HAbdullah64120?t=A4DtAJ3RCYzHm_adImU8AQ&s=08" target="_blank" rel="noopener noreferrer">
      <BsTwitter />
    </a></div>
    <div><a href="https://www.facebook.com/profile.php?id=100026931456532&mibextid=gjUFcU" target="_blank" rel="noopener noreferrer">
    <FaFacebookF />
  </a></div>
    <div><a href="https://instagram.com/hafizabdullah685?igshid=NzZlODBkYWE4Ng==" target="_blank" rel="noopener noreferrer">
      <BsInstagram /></a>
    </div>
  </div>
);

export default SocialMedia;
