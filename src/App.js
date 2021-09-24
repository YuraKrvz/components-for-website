import './App.css';
import Form from './components/Form/Form';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Pages';

function App() {
  return (
    <Router>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/form" exact component={Form} />
      </Switch>
      
    </Router>
  );
}

export default App;
