import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import { ToastContainer } from "react-toastify";
import Home from "./Home";
import "react-toastify/ReactToastify.css";
import PageNotFound from "./PageNotFound";
import PrivateRoute from "./components/PrivateRoute";
import BreadCrumbs from "./components/BreadCrumbs";
import Test from "./Test";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BreadCrumbs />}>
            <Route index element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/login/home"
              element={<PrivateRoute component={<Home />} />}
            />
            <Route
              path="/login/home/test"
              element={<Test />}
            />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
