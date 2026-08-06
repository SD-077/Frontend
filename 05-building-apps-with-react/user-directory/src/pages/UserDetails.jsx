import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";

export default function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("Request Failed");
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setIsLoading(false);
      })
      .catch(() => {
        setUser(null);
        setError("Could not load the user. Check your connection and reload.");
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

  if (!user) {
    return (
      <div className="flex flex-col items-start gap-4">
        <div className="alert alert-error">
          <span>There is no user with id {id}</span>
        </div>

        <Link to="/users" className="btn btn-sm">
          Back to users
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <Link to="/users" className="btn btn-ghost btn-sm w-fit">
        Back to users
      </Link>

      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <div className="flex items-center gap-4">
            <div className="avatar avatar-placeholder">
              <div className="bg-primary text-primary-content w-14 rounded-full">
                <span className="text-xl">{user.name[0]}</span>
              </div>
            </div>
            <div>
              <h2 className="card-title">{user.name}</h2>
              <span className="text-base-content/60">@{user.username}</span>
            </div>
          </div>
          <div className="divider my-1"></div>
          <div className="grid gap-2 sm:grid-cols-2">
            <p>
              <span className="text-base-content/60">Email</span> {user.email}
            </p>
            <p>
              <span className="text-base-content/60">Phone</span> {user.phone}
            </p>
            <p>
              <span className="text-base-content/60">Company</span>{" "}
              {user.company.name}
            </p>
            <p>
              <span className="text-base-content/60">City</span>{" "}
              {user.address.city}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
