import React from "react";
import FavoriteContext from "../Contexts/favoritesContexts";

const { useContext } = React;

const Navbar = () => {
    const { favoritePokemons } = useContext(FavoriteContext);

    let imgUrl =
        "https://cutt.ly/AYbV4QA";

    return (
        <nav>
            <div />
            <div>
                <img src={imgUrl} alt="pokeapi-logo" className="navbar-image" />
            </div>
            <div>&#10084;&#65039; {favoritePokemons.length}</div>
        </nav>
    );
};

export default Navbar;