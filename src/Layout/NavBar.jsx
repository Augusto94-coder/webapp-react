import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand bg-dark navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">WebApp Movies</Link>
        <div className="navbar-nav">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </div>
      </div>
    </nav>
  );
}