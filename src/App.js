import { Switch, Route } from 'react-router-dom';

import './css/main.scss';

//import Home from './views/Home';
//import Resume from './views/Resume';
import About from './views/About';
import Apps from './views/Apps';

function App() {
  return (
    <main className="App">
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/about" component={About} />
        <Route path="/apps" component={Apps} />
      </Switch>
    </main>
  );
}

export default App;
