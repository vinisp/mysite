import {useState, useEffect} from "react";
import {Main} from './sections/main/index'
import {Content} from './sections/content/index'
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
      <Main title="ok" />
        <p>{offsetY} </p>
        {offsetY >= 114 ? <Content /> : null}
    </div>

  );
}

export default App;
