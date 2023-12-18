import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function CompletePayment() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    age: "",
    batch: "",
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
    navigate("/");

  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Complete Payment </h2>
        <form action="" onSubmit={handleSubmit}>

          <div className="mb-3">
            <label htmlFor="cardnumber"><strong>Card Number</strong></label>
            <input type="text"  placeholder="Enter 12 digit Card Number" name='cardnumber'
             min="100" max="999" onChange={handleInput} className="form-control rounded-0" />
          </div>

          <div className="mb-3">
            <label htmlFor="email"><strong>CVV</strong></label>
            <input type="number" placeholder="Enter 3-digit CVV" name='email'
            onChange={handleInput}  className="form-control rounded-0" />
            {errors.email && <span className="text-danger">{errors.email}</span>}
          </div>

          <div>
            You will be charged Rs.500 per month.
          </div>

          <button type='submit' className="btn btn-success w-100 rounded-0">Complete Payment</button>
          

          <Link to="/signup" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"><strong>Back</strong></Link>
        </form>
      </div>
    </div>
  );
}

export default CompletePayment;
