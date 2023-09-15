import React from "react";
import Card from "./Card"; // Asegúrate de importar tu componente Card

export const Favs = () => {
  // obtengo lista de tarjetas favoritas desde el localStorage
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // Creo  set de IDs para realizar la validación
  //const favoriteIdsSet = new Set(favorites.map((favorite) => favorite.id));


  return (
    <div>
      <h1>Tus Dentistas Favoritos</h1>
      {favorites.length === 0 ? (
        <p>No tienes dentistas favoritos aún.</p>
      ) : (
        <div className="card-grid">
          {favorites.map((favorite) => (
            <Card
              key={favorite.id}
              id={favorite.id}
              name={favorite.name}
              username={favorite.username}
            />
          ))}
        </div>
      )}
    </div>
  );
};
