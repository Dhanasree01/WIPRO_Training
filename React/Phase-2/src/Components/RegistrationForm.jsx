import React, { useRef, useState } from "react";

function RegistrationForm() {
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = firstNameRef.current.value.trim();
    const lastName = lastNameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value;

    let newErrors = {};

    if (!firstName) newErrors.firstName = "First Name is required";
    else if (!/^[A-Za-z]+$/.test(firstName))
      newErrors.firstName = "Only alphabets allowed";

    if (!lastName) newErrors.lastName = "Last Name is required";
    else if (!/^[A-Za-z]+$/.test(lastName))
      newErrors.lastName = "Only alphabets allowed";

    if (!email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Invalid email format";

    if (!password)
      newErrors.password = "Password is required";
    else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password)
    )
      newErrors.password =
        "Min 8 chars, uppercase, lowercase, number & special char";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus("");
    } else {
      setErrors({});
      setStatus("Registration Successful ✅");
    }
  };

  return (
    <div className="container mt-5">
      <div className="">
        <div className="col-12 col-sm-10 col-md-6 col-lg-5">
          <form onSubmit={handleSubmit} className="card shadow-lg p-4 w-100">
            <h3 className="text-center mb-4">User Registration</h3>

            <input
              type="text"
              className="form-control mb-2"
              placeholder="First Name"
              ref={firstNameRef}
            />
            {errors.firstName && (
              <small className="text-danger">{errors.firstName}</small>
            )}

            <input
              type="text"
              className="form-control mt-3 mb-2"
              placeholder="Last Name"
              ref={lastNameRef}
            />
            {errors.lastName && (
              <small className="text-danger">{errors.lastName}</small>
            )}

            <input
              type="email"
              className="form-control mt-3 mb-2"
              placeholder="Email"
              ref={emailRef}
            />
            {errors.email && (
              <small className="text-danger">{errors.email}</small>
            )}

            <input
              type="password"
              className="form-control mt-3 mb-2"
              placeholder="Password"
              ref={passwordRef}
            />
            {errors.password && (
              <small className="text-danger">{errors.password}</small>
            )}

            <button className="border border-black rounded-2 bg-blue-600 text-black px-4 py-2 hover:bg-blue-700">
            Submit
            </button>

            {status && (
              <p className="text-success text-center mt-3">{status}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
