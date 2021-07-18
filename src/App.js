import './App.css';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import  Homepage  from './components/Homepage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Switch>
          <Route exact path="/"><Dashboard /></Route>
          <Route path="/signup" ><Signup /></Route>
          <Route path="/login" ><Login /></Route>
          <Route path="/home" ><Homepage /></Route>
        </Switch>
            </div>
    </BrowserRouter>
  );
}

export default App;
