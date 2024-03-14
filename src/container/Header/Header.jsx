import React from 'react';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';
import  { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  const mode = useSelector(state => state.darkMode.mode);
  
//fetching my photo from sanity
const [profile, setProfile] = useState([]);

  useEffect(() => {
    const query = '*[_type == "profile"]';

    client.fetch(query).then((data) => {
      setProfile(data);
    });
  }, []);
  
//dark mode

const [profiledk, setProfiledk] = useState([]);

  useEffect(() => {
    const query = '*[_type == "profiledk"]';

    client.fetch(query).then((data) => {
      setProfiledk(data);
    });
  }, []);
  

  return(
  <>
  <div className={`app__header app__flex  bg ${mode === 'light'?'dark-mode':'light-mode'}`}>
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className={`badge-cmp ${mode === 'light'?'dark-mode':'light-mode'} app__flex `}>
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className={`${mode==='light'?'p-text2':'p-text'}`} >Hello, As-salamu alaykum ! I am</p>
            <h1 className={`${mode==='light'?'heada-text2':'heada-text'}`} >Hafiz Abdullah</h1>
          </div>
        </div>

        <div className={`tag-cmp ${ mode === 'light'?'dark-mode':'light-mode'} app__flex`}>
          
          <p className={`${mode==='light'?'p-text2':'p-text'}`}>Web Developer</p>
          <p className={`${mode==='light'?'p-text2':'p-text'}`}>Freelancer</p>
          
        </div>
        
       
        <a href={images.Resume} className="cv p-text1" download="Hafiz Abdullah">Download CV</a>

         {/*<div>
           
           <button>hhhh</button>
            <> </>

  </div>*/}

      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
     { mode==='light'?
     
     profiledk.map((profiledk) => (
      <img src={urlFor(profiledk.imgUrl)} alt={profiledk.title}  />))
    
:
profile.map((profile) => (
  <img src={urlFor(profile.imgUrl)} alt={profile.title}  />))
    }
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className={` ${mode==='light'?'app__header-circles2':'app__header-circles'}`}
    >
      {[images.redux, images.react, images.mu5].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
    
    </div>
    <div className="marquee">
      <span className={`${mode==='light'?'bold-text2':'bold-text'}`}>
        We have ability to create big projects like ecommerce-website,portfolio,blogging and many web-app in short time. </span> 
    </div>
 </>
)};

export default AppWrap(Header, 'home');
