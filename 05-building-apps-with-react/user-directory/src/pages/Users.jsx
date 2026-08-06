import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("q") || "";

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

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchParams(value ? { q: value } : {});
  };

  const visibleUsers = users.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase()),
  );

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
    <div className="flex flex-col gap-4">
      <input
        type="search"
        className="input w-full"
        placeholder="Filter by name"
        value={query}
        onChange={handleSearch}
      />

      {visibleUsers.length === 0 ? (
        <div className="alert">
          <span>No user match {query}</span>
        </div>
      ) : (
        <ul className="flex flex-col gap-3">
          {visibleUsers.map((user) => (
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
      )}
    </div>
  );
}
