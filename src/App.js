// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMode, selectMode } from './darkModeSlice';
import { Navbar } from './components';
import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import './App.scss';

const App = () => {
  const dispatch = useDispatch();
  const mode = useSelector(selectMode);

  const handleToggleMode = () => {
    dispatch(toggleMode());
  };

  return (
    <div className={`app ${mode==='light'?'dark-mode':'light-mode'}   `}>
      <Navbar mode={mode} handleToggleMode={handleToggleMode} />
      <Header />
      <div className={`app__whitebg ${mode==='light'?'dk':'lg'}`}>
        <About/>
      <div className={`app__primarybg ${mode==='light'?'dd':'ll'}`}><Work/></div>
      <Skills />
      <div className={`app__primarybg ${mode==='light'?'dd':'ll'}`}><Testimonial/></div>
      <Footer />
      </div>
    </div>
  );
};

export default App;
