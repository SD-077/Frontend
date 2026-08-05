import { Link } from "react-router";

export default function Navbar() {
  return (
    <header className="navbar bg-base-100 px-4 shadow-sm">
      <div className="flex-1">
        <span className="text-xl font-bold">User Directory</span>
      </div>

      <nav className="flex gap-1">
        <Link to="/" className="btn btn-ghost btn-sm">
          Home
        </Link>
        <Link to="/about" className="btn btn-ghost btn-sm">
          About
        </Link>
        <Link to="/users" className="btn btn-ghost btn-sm">
          Users
        </Link>
      </nav>
    </header>
  );
}
