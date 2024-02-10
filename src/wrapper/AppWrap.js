import React from 'react';
import { NavigationDots, SocialMedia } from '../components';
import { useSelector } from 'react-redux';
const AppWrap = (Component, idName, classNames) => function HOC() {
  const mode = useSelector(state => state.darkMode.mode);
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
      <div className="app__wrapper app__flex">
        <Component />

        <div className="copyright">
          <p className={`${mode==='light'?'p-text2':'p-text'}`}>@2023 Hafiz Abdullah</p>
          <p className={`${mode==='light'?'p-text2':'p-text'}`}>All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrap;
