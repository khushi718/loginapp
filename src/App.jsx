import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Signup from "./Signup";


    const App = () =>{
        return(
            <>
            <Header/>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route  path="/signup" component={Signup}/>
            </Switch>
            </>
        );
    };
    export default App;
