import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./SignupValidation";
import axios from "axios";

function Login() {
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
    <>
   
       
        <div class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container-fluid">
                <a href="index.html" class="navbar-brand">Y<span>oo</span>ga</a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div class="navbar-nav ml-auto">
                        <a href="" class="nav-item nav-link active">Home</a>
                        <a href="" class="nav-item nav-link">About</a>
                        <a href="" class="nav-item nav-link">Service</a>
              
                        <a href="" class="nav-item nav-link">Contact</a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Nav Bar End -->


        <!-- Hero Start --> */}
        <div class="hero">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-sm-12 col-md-6">
                        <div class="hero-text">
                            <h1>Everyday is a Great Day for Yoga!</h1>
                            <p>
                            Yoga is the fountain of youth. You’re only as young as your spine is flexible.
                            </p>
                            <div class="hero-btn">
                                <a class="btn" href="#shiva">Register Now</a>
                            
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6">
                        <div class="hero-image">
                            <img src="hero.png" height="500px" alt="Hero Image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="blog m-3">
            <div class="container">
                <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s" >
                    <p>Register Your Fitness</p>
                    <h2>Join Us Now</h2>
                </div>
                <div class="owl-carousel blog-carousel wow fadeInUp" data-wow-delay="0.1s">
                <div className="d-flex justify-content-center align-items-center  vh-50">
      <div className="bg-white p-3 rounded w-25" id="shiva"> 
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <h4>Name</h4>
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
              <h4>Email</h4>
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
              <h4>Age</h4> (Age must be between 18 and 65)
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

          <div class="form-group col-m-0">
            <label for="inputState">
              <h5 className="m-4">Batch Preference</h5>
            </label>
            <select
              id="inputState"
              class="form-group col-md-20"
              name="batch"
              onChange={handleInput}
            >
              <option selected>Choose...</option>
              <option>6-7 A.M.</option>
              <option>7-8 A.M.</option>
              <option>8-9 A.M.</option>
              <option>5-6 A.M.</option>
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
                </div>
            </div>
        </div>
    </>
  );
}

export default Login;



