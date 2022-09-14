import React from "react";
//import User from "./components/User";
import Head from "./components/Head";
import Footer from "./components/Footer";
import ApiSearch from "./components/ApiSearch";
/* import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"; */
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Head />
      <ApiSearch />
      <Footer />
    </div>
  );
}
