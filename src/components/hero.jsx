import React, { Component } from 'react';
import { heroTeams } from './heroes';
//Goal: pull arrays from heroes.js, manipulate, and output in the ReactDOM

class Hero extends Component {
    state = { 
        heroes: heroTeams()
     }

    // handleHeroName = (props) => {
    //     const heroes = [...this.state.heroes];
    //     const heronames = heroes.map((hero) => 
    //     <li key={this.props.indexOf}>{hero}</li>
    //     ); 
    //     return heronames;
    // }   

    render() { 
        return ( 
            <div className="container m-4">
                <div className="row">
                    <div className="col-12">
                        <h1> Musical Chairs! Hero version </h1>
                        <ul className="list-group list-group-flush">
                        {this.state.heroes.map(hero => <li key={hero} className="list-group-item">{hero}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Hero;



    