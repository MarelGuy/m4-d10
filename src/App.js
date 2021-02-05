import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Pages/Home/Homepage'
import Footer from './Components/Footer/Footer'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Albumpage from './Pages/Album-page/Albumpage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">

      <Sidebar />
      <Container>
        <Router>
          <Switch>
            <Route exact path="/:albumId">
              <Albumpage />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
