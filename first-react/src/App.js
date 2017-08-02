import React, { Component } from 'react';
import Header from "./Header";
import Home from "./Home";

class App extends React.Component {
  render() {
      var user = {
          name :"somex",
          hobbies: ["sports", "reading"]
      };
    return (
      <div className="container">
        <div className="row">
            <div className="col-xs-1    0 col-xs-offset-1">
                <Header/>
            </div>
        </div>
          <div className="row">
              <div className="col-xs-10 col-xs-offset-1">
                  <Home name={"adile"} age ={20} user={user}/>
                  <p>This is a paragraph !</p>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
