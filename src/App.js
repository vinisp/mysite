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
return (
  <Router >
    <div className="app">
      <Header />
      <Switch >
        <Route exact path="/">
          <Main />
          <Content />
        </Route>
      </Switch>
      <Footer />
        </div>
    </Router>
  );
}

export default App;
