import React, {Component} from 'react';
import './Pokecard.css'

class Pokecard extends Component {
    render(){
        let props = this.props
        return ( 
        <div className="Pokecard">
            <h5>{props.name}</h5>
            <div><img src={props.img} alt="pokemon image"/></div>
            <p>Type:{props.type}</p>
            <p>EXP:{props.exp}</p>
        </div>       
        )
    }

}

export default Pokecard;