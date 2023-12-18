import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import CompletePayment from "./CompletePayment";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/completePayment" element={<CompletePayment />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
