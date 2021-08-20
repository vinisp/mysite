import {useState, useEffect} from "react";
import {Main} from './sections/main/index'
import {Content} from './sections/content/index'
import {Training} from './sections/training/index'
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
    <Main />
      <p>{offsetY} </p>
        {offsetY >= 114 ? <Content
          title="CyberMonkey"
          subTitle="Logo"
          strongTerm="Meu logo"
          resume="Um orgulho de trampo"
        /> 
            : null}
          <Training
            text={offsetY}
          />
  </div>
  );
}

export default App;
