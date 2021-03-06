import React, {Component} from "react"
import Pokecard from "./Pokecard"
import './Pokedex.css'

class Pokedex extends Component {
    render(){
        function addURL(id){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        }
        let pokemons = [
            {id: 4, name: "Charmander", type: "fire", base_experience: 62},
            {id: 7, name: "Squirtle", type: "water", base_experience: 63},
            {id: 11, name: "Metapod", type: "bug", base_experience: 72},
            {id: 12, name: "Buterfree", type: "Flying", base_experience: 173},
            {id: 25, name: "Pikachu", type: "electric", base_experience: 112},
            {id: 39, name: "Jigglypuff", type: "normal", base_experience: 123},
            {id: 94, name: "Gengar", type: "poison", base_experience: 111},
            {id: 133, name: "Eevee", type: "normal", base_experience: 65},      
        ]
        return(
            <div className='Pokedex'>
                {pokemons.map(pkm => <Pokecard img={addURL(pkm.id)} name={pkm.name} type={pkm.type} exp={pkm.base_experience}/>)}
            </div>
        )
    }

}

export default Pokedex;