import { Switch, Route } from 'react-router-dom';

import './css/main.scss';

import Home from './views/Home';
import About from './views/About';
import Apps from './views/Apps';
import Resume from './views/Resume';

function App() {
  return (
    <main className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/apps" component={Apps} />
        <Route path="/resume" component={Resume} />
      </Switch>
    </main>
  );
}

export default App;
