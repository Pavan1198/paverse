import { Link, NavLink, Outlet } from "react-router-dom";

export function Shell() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <Link to="/" className="brand">
          <span className="brand-mark">P</span>
          <div>
            <strong>Paverse</strong>
            <span>Portfolio Platform</span>
          </div>
        </Link>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/resume">Resume</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
