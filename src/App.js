import React from 'react';
import "./App.css";
import {Route, Switch} from 'react-router-dom';
// import components
import Home from "./pages/Home"
import Rooms from "./pages/Rooms"
import SingleRooms from "./pages/SingleRooms"
import Error from "./pages/Error"

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms" component={Rooms} />
      <Route exact path="/rooms/:slug" component={SingleRooms} />
      <Route component={Error} />
    </Switch>
      
    </>
  );
}

export default App;
