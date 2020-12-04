import React, { Component } from "react";
import { heroTeams } from "./heroes";

class TableBody extends Component {
  state = {
    heroes: heroTeams(),
  };

  render() {
    return (
      <div className="container m-4">
        <div className="row">
          <h1> Musical Chairs! Hero version </h1>
          <div className="col-12">
            <ul className="list-group list-group-flush">
              {this.state.heroes.map((hero) => (
                <li key={hero} className="list-group-item">
                  {hero}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TableBody;
