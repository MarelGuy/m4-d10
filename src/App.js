import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Pages/Home/Homepage'
import Footer from './Components/Footer/Footer'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Albumpage from './Pages/Album-page/Albumpage';

function App() {

  return (
    <div className="App">

      <Sidebar />
      <Router>
        <Switch>
          <Route exact path="/album-page">
            <Albumpage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
