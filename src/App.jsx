import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { useContext } from "react";
import { Home } from './Components/Home';
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import { Favs } from './Components/Favs';
import DentistDetail from "./Components/DentistDetail";
import { GlobalContext } from "./Components/utils/global.context";



const App = () => {

  const { state } = useContext(GlobalContext); 
  return (
    <>
    <div className={`root ${state.theme}`}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dentist/:id" element={<DentistDetail />} />
          <Route path="/contacto" element={<Form />} />
          <Route path="/favs" element={<Favs />} />
        </Routes>
      </Router>

      <Footer />
      </div>
    </>  
  );
};

export default App;
