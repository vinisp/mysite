import {useState, useEffect} from "react";
import {BrowserRouter as Router,
Switch,
Route} from "react-router-dom";

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
  <Router >
    <div className="app">
      <Header />
      <Switch >
        <Route path="/">
          <Main />
          <Content />
          <p>{offsetY} </p>
            </Route>
        </Switch>
  
      <Footer />
        </div>
    </Router>
  );
}

export default App;
