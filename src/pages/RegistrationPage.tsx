import { useDispatch } from "react-redux";
import { register } from "../store/authSlice";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
   
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {

        const user = userCredential.user;
        dispatch(register(user)); 
      })
      .catch((error) => {

      });
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
