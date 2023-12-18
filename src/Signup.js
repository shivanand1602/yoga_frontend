import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./SignupValidation";
import axios from "axios";

function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    age: "",
    batch: "7-8 A.M.",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    setErrors(Validation(values));
    if (
      errors.name === "" &&
      errors.email === "" &&
      errors.age === "" &&
      errors.batch === ""
    ) {
      axios
        .post("http://localhost:8081/signup", values)
        .then((res) => {
          navigate("/completePayment");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Registration Form </h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="eligibile">
              <strong>Age</strong> (Age must be between 18 and 65)
            </label>
            <input
              type="number"
              name="age"
              min="18"
              max="65"
              placeholder="Enter Your Age"
              maxlength="3"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.eligible && (
              <span className="text-danger">{errors.eligible}</span>
            )}
          </div>

          <div class="form-group col-md-4">
            <label for="inputState">
              <strong>Batch Preference</strong>
            </label>
            <select
              id="inputState"
              class="form-control"
              name="batch"
              onChange={handleInput}
            >
              <option selected>Choose...</option>
              <option>6-7 A.M.</option>
              <option>7-8 A.M.</option>
              <option>8-9 A.M.</option>
              <option>5-6 P.M.</option>
            </select>
          </div>

          <div>You will be charged Rs.500 per month.</div>

          <button type="submit" className="btn btn-success w-100 rounded-0">
            Proceed to Payment
          </button>

          <Link
            to="/"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            <strong>Back</strong>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
