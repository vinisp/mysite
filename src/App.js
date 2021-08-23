import {useState, useEffect} from "react";

//Components//

import {Main} from './sections/main/index';
import {Content} from './sections/content/index';
import {Header} from './components/navHeader/index';
import {Footer} from './components/footer/index';

//Global Theme

import './globalStyle/App.scss';

function App() {
  
const [offsetY, setOffsetY] = useState(0);
const handleScroll = () => setOffsetY(window.pageYOffset);

useEffect(() => {
  window.addEventListener('scroll', handleScroll);

  return () => window.removeEventListener('scroll', handleScroll)
}, [])

  return (
<div className="app">
  <Header />
    <Main />
      <p>{offsetY} </p>
        {offsetY >= 114 ? <Content
          title="CyberMonkey"
          subTitle="Logo"
          strongTerm="Meu logo"
          resume="Um orgulho de trampo"
        /> 
            : null}
      <Footer />
  </div>
  );
}

export default App;
