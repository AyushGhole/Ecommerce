import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar2 from "./components/Navbar2";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <NavBar2></NavBar2>
      <Outlet></Outlet>
      <Footer />
    </>
  );
}

export default App;
