import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";
import Loader from "../components/Loader"

import { useGlobal } from "../context/ContextGlobal"

export default function App() {
  const { isLoading } = useGlobal();
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="container py-4 flex-grow-1">
        <Outlet />
      </main>
      {isLoading && <Loader />}
      <Footer />
      
    </div>
  );
}