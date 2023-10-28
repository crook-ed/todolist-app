import React , {useState} from 'react';
import { Link } from 'react-router-dom';


const Login = ({ setAuth }) => {

  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  })


const {email, password} = inputs;

const onChange = e => {
    const { name, value } = e.target;
    setInputs(prevInputs => ({ ...prevInputs, [name]: value }));
};

const onSubmitForm = e =>{
    
}

  return (
    <>
      <h1 className="mt-5 text-center">Login</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="email"
          value={email}
          onChange={onChange}
          className="form-control my-3"
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          className="form-control my-3"
          placeholder="password"
        />
        <button className="btn btn-success btn-block" type="submit">
          Submit
        </button>
      </form>
      <Link to="/register">register</Link>
    </>
  );
};

export default Login;
