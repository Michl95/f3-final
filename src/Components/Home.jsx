
import { useContext } from "react";
import Card from "./Card";
import { GlobalContext } from "./utils/global.context";


export const Home = () => {

  const { state } = useContext(GlobalContext);

  return (
    <>
      <h1>Listado de Dentistas</h1>
      <div className={`card-grid`}>
        {state.users.map( dentist => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
    </>
  );
}

