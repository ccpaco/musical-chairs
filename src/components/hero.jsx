import React, { Component } from "react";
import TableBody from "./tablebody";
//Goal: pull arrays from heroes.js, manipulate, and output in the ReactDOM

class Hero extends Component {
  // handleHeroName = (props) => {
  //     const heroes = [...this.state.heroes];
  //     const heronames = heroes.map((hero) =>
  //     <li key={this.props.indexOf}>{hero}</li>
  //     );
  //     return heronames;
  // }

  render() {
    return <TableBody />;
  }
}

export default Hero;
