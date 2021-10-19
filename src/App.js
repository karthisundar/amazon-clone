import React , { useEffect } from "react";
import "./App.css";
import Header from './Header';
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Payment from './Payment';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./Orders";


const promise = loadStripe(
  "pk_test_51JfohqSAnq3sH7Yw3TGoWTrqB1XfBmzNnFh5jrysJFjAbJ7oOc4kQNZvrqbB3fmNvWrPiEJtGrGL9BDmN9KBCPSl007n8MG838"
);

function App() {
 
    
  const [{}, dispatch] = useStateValue();

    useEffect(() => {

      auth.onAuthStateChanged(authUser => {
        console.log('the user is >>>', authUser);
        if (authUser) {

          dispatch({
            type: 'SET_USER',
            user: authUser

          })

        }else{

          dispatch({
            type: 'SET_USER',
            user: null
          })
         

        }
      })

    },  [] )   

    return (
      <Router>
        <div className="App">
       <Header />

          <Switch>  
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Orders">
            <Orders />
          </Route>
            <Route path="/checkout">
          <Checkout />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
            <Payment />
            </Elements>
          </Route>
        <Route path="/">
          <Home />
        </Route>

          </Switch>

        </div>
        </Router>
    )
}
export default App;
