import { Outlet } from "react-router";

export default function UsersLayout() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Users</h1>
      <p className="text-base-content/60">Live Data from JSONPlaceholder</p>
      <div className="divider"></div>
      <Outlet />
    </div>
  );
}
