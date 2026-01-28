// import { useNavigate } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate();

//   const login = () => {
//     localStorage.setItem("loggedIn", "true"); // store string
//     alert("Login Successful ✅");
//     navigate("/"); // redirect
//   }

//   return (
//     <div>
//       <button onClick={login}>Login Here!</button>
//     </div>
//   )
// }

// export default Login;
import React from "react";

function Login() {
  const login = () => {
    localStorage.setItem("loggedIn", "true");
    alert("Login Successful ✅");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={login}>Login Here!</button>
    </div>
  );
}

export default Login;
