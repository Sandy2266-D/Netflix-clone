import react from "react"
import {BrowserRouter,Switch,Route} from "react-router-dom"
import './App.css';
import Home from "./pages/Home"
import NetFlixShow from "./pages/NetFlixShow"
import Footer from "./components/Footer/Footer"
import ScrollTop from "./components/ScrollTop/ScrollTop";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      
      <ScrollTop />
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/netflix-show" component={NetFlixShow}/>
      </Switch>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
