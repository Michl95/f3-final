import React, { useState, useContext } from "react";
import { GlobalContext } from "./utils/global.context";


const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const { state } = useContext(GlobalContext);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (formData.fullName.length <= 5 || !formData.email.match(/^\S+@\S+\.\S+$/)) {
      setFormError("Por favor verifique su información nuevamente");
      return;
    }

    // Envío exitoso
    setFormSuccess(`Gracias ${formData.fullName}, te contactaremos cuanto antes vía correo electrónico.`);
    setFormData({
      fullName: "",
      email: "",
    });
    setFormError("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={state.theme}>
        <div>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Nombre Completo..."
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {formError && <p className="error-msg">{formError}</p>}
      {formSuccess && <p className="success-msg">{formSuccess}</p>}
    </>
  );
};

export default Form;
