import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../store/authThunks";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(login(formData.email, formData.password)).then(() => {
      history.push("/books");
    });
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) =>
            setFormData((prevData) => ({ ...prevData, email: e.target.value }))
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              password: e.target.value,
            }))
          }
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
