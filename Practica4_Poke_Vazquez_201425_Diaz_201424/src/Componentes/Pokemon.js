import React, { useContext } from "react";
import FavoriteContext from "../Contexts/favoritesContexts";

const Pokemon = (props) => {
    const { pokemon } = props;
    const { favoritePokemons, updateFavoritePokemons } = useContext(
        FavoriteContext
    );

    const redHeart = "❤️";
    const blackHeart = "🖤";
    const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

    const clickHeart = (e) => {
        e.preventDefault();
        updateFavoritePokemons(pokemon.name);
    };

    return (
        <div className="pokemon-card">
            <div className="pokemon-img-container">
                <img
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    className="pokemon-img"
                />
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h2>{pokemon.name}</h2>
                    <div>#{pokemon.id}</div>
                    <button onClick={clickHeart} className="pokemon-heart-btn">
                        <div className="pokemon-favorite">{heart}</div>
                    </button>
                </div>
                <hr></hr>
                <div className="card-bottom">
                    <div className="pokemon-type">
                        <h4>Types :</h4>
                         {pokemon.types.map((type, idx) => {
                            return (
                                <div key={idx} className="pokemon-type-text">
                                    {type.type.name}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <hr></hr>
                <div className="card-bottom">
                    <div className="pokemon-attack">
                        <h4>Abilities : </h4>
                        {pokemon.abilities.map((ability, idx) => {
                            return (
                                <div key={idx} className="pokemon-type-text">
                                    {ability.ability.name}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pokemon;
