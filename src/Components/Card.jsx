import React, { useContext }from "react";
import { Link } from "react-router-dom";
import DoctorImg from '../assets/images/doctor.jpg';
import { GlobalContext } from "./utils/global.context";


const Card = ({ name, username, id }) => {

  const { state } = useContext(GlobalContext);

  const addFav = () => {
    // obtengo datos actuales de los favoritos desde el localStorage
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // verifico si existe - si existe el ID en el array devuelve true
    const isAlreadyFavorited = favorites.some((favorite) => favorite.id === id);

    
    if (!isAlreadyFavorited) {
      const newFavorite = { id, name, username };
      favorites.push(newFavorite);

    }

    // actualizo datos de favoritos en el localStorage
    localStorage.setItem("favorites", JSON.stringify(favorites));
    console.log(localStorage)
  };

  return (
    <div className= {`card ${state.theme}`}>
      <div>
        <img src={ DoctorImg } alt="Doctor img" style={{width: '100%'}}/>
      </div>
      {/* En cada card deberan mostrar en name - username y el id */}
      <Link to={`/dentist/${id}`}><h4>{name}</h4></Link>
      <p>{username}</p>
      <p>ID: {id}</p>
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className={`favButton ${state.theme}`}>Add fav</button>
    </div>
  );
};

export default Card;
