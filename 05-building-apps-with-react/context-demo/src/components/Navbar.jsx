import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { user, login, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  console.log(user);

  return (
    <div className="navbar bg-base-100 px-4 shadow-sm">
      <div className="flex-1">
        <span className="text-xl font-bold">Context Demo</span>
      </div>

      <div className="flex items-center gap-3">
        <div>
          <button
            className="btn btn-ghost btn-circle text-lg"
            onClick={toggleTheme}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>

        {user.isAuthenticated ? (
          <>
            <div className="avatar avatar-placeholder">
              <div className="bg-primary text-primary-content w-8 rounded-full">
                <span className="text-sm">{user.name[0].toUpperCase()}</span>
              </div>
            </div>

            <span className="font-medium">{user.name}</span>
            <button className="btn btn-sm btn-outline" onClick={logout}>
              Log out
            </button>
          </>
        ) : (
          <>
            <span className="badge badge-ghost">Guest</span>
            <button className="btn btn-sm btn-primary" onClick={login}>
              Log in
            </button>
          </>
        )}
      </div>
    </div>
  );
}
