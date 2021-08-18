import './globalStyle/App.scss';
import {Main} from './sections/main/index'
import {Content} from './sections/content/index'
import {Footer} from './sections/footer/index'

function App() {
  return (
    <div className="app">
      <Main />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
