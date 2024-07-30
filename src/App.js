/* eslint-disable */
import { Routes, Route, Link } from "react-router-dom";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Tours from "./components/tours/tours";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import Notfound from "./components/notfound/notfound";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Tours />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
