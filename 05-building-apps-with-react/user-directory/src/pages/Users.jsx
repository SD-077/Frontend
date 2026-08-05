import { useState, useEffect } from "react";
import { Link } from "react-router";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Could not load users. Check your connection and reload.");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center py-8">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-error">
        <span>{error}</span>
      </div>
    );
  }

  return (
    <div>
      <h1 className="mb-4 text-3xl font-bold">Users</h1>
      <ul className="flex flex-col gap-3">
        {users.map((user) => (
          <li key={user.id}>
            <Link
              to={`/users/${user.id}`}
              className="card bg-base-100 shadow-sm transition hover:shadow-md"
            >
              <div className="card-body flex-row items-center gap-4 py-4">
                <div className="avatar avatar-placeholder">
                  <div className="bg-primary text-primary-content w-10 rounded-full">
                    <span>{user.name[0]}</span>
                  </div>
                </div>
                <p className="font-medium">{user.name}</p>
                <p className="text-base-content/60 text-sm">{user.email}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
