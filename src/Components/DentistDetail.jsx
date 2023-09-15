import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import DoctorImg from '../assets/images/doctor.jpg';
import { GlobalContext } from "./utils/global.context";

const DentistDetail = () => {
  const { id } = useParams(); // obtengo el ID del dentista de los parámetros de la URL

  const [dentist, setDentist] = useState(null);

  const { state } = useContext(GlobalContext);

  useEffect(() => {
    // hago una solicitud GET a la API de JSONPlaceholder para obtener el dentista por ID
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDentist(data); // almaceno los datos del dentista en el estado local
      })
      .catch((error) => {
        console.error("Error al obtener el dentista:", error);
      });
  }, [id]);

  if (!dentist) {
    return <div className="loader">Cargando...</div>; // mostramos mensaje de carga 
  }

  return (
    <div className= {`card ${state.theme}`}>
      <div>
        <img src={ DoctorImg } alt="Doctor Img" style={{width: '100%'}}/>
      </div>
      <p>{dentist.name}</p>
      <p>{dentist.username}</p>
      <p>ID: {dentist.id}</p>
    </div>
  );
};

export default DentistDetail;