import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Error from './components/Error/Error';
import ProductDetail from './components/ProductDetail/ProductDetail';
function App() {
  return (
    <Router>
     <Header></Header>
     <Switch>
          <Route path="/shop">
          <Shop> </Shop>
          </Route>

          <Route path="/review">
          <Review></Review>
          </Route>
          <Route path="/manage">
          <Inventory></Inventory>
          </Route>

          <Route path="/product/:productKey">
          <ProductDetail></ProductDetail>
          </Route>

          <Route exact path="/">
          <Shop> </Shop>
          </Route>

           <Route path="*">
            <Error></Error>
           </Route>
          </Switch>
    </Router>

  

  );
}

export default App;
