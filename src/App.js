import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Pages/Homepage'
import Artistpage from './Pages/Artistpage'
import './Pages/Albumpage'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Albumpage from './Pages/Albumpage';

function App() {

  return (
    <div className="App">

      <Sidebar />
      <Router>
        <Switch>
          <Route exact path="/artist-page">
            <Artistpage />
          </Route>
          <Route exact path="/album-page">
            <Albumpage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
