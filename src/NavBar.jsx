import { Link, Outlet } from "react-router-dom";

export function NavBar() {
  return (
    <>
      <nav className="nav">
        <a href="/" className="site-title">
          Site Name
        </a>
        <ul>
          <li>
            <Link to="/elements">HTML Elements</Link>
          </li>
          <li>
            <Link to="/selectors">Selectors</Link>
          </li>
          <li>
            <Link to="/hooks">Hooks</Link>
          </li>
          <li>
            <Link to="/vacation">Vacation</Link>
          </li>
          <lin>
            <Link to="/conversion">Conversion</Link>
          </lin>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
