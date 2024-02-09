import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Navbar from './Components/Navbar';
import Productslist from './Pages/Movieslist';
import MovieDetails from './Pages/MovieDetails';
import Mylogin from './Pages/Mylogin';
import Regsform from './Pages/Regsform';
import NotFound from './Pages/NotFound';
import Favorites from './Pages/Favorites';
import Cart from './Pages/Cart';


function App() {
  return (
  <>
   <div>
        <BrowserRouter> 
          <Navbar />
          <Switch> 
            <Route exact path={"/"} component={Productslist} />
            <Route exact path={"/login"} component={Mylogin} /> 
            <Route exact path={"/register"} component={Regsform} />  
            <Route exact path={"/favorites"} component={Favorites} />
            <Route path="/cart" component={Cart} />
            <Route exact path={"/:id"} component={MovieDetails} />
            <Route exact path={"*"} component={NotFound} />
          </Switch> 
        </BrowserRouter>
    </div>
          
  </>
  );
}

export default App;
