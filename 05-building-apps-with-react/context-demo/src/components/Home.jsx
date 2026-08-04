import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { user, login } = useAuth();

  if (!user.isAuthenticated) {
    return (
      <div className="hero bg-base-100 rounded-box py-16">
        <div className="hero-content max-w-md text-center">
          <div>
            <h1 className="text-4xl font-bold">Share state, not props</h1>
            <p className="py-6">
              Log in to see your dashboard. Nothing in here uses props, it's
              aaaall from context.
            </p>

            <button className="btn btn-primary" onClick={login}>
              Log in to continue
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold">Welcome back, {user.name}</h1>
        <p className="text-base-content/70">
          Here's what happened while you were away
        </p>
      </div>

      <div className="stats stats-vertical sm:stats-horizontal bg-base-100 w-full shadow-sm">
        <div className="stat">
          <div className="stat-title">Open pull requests</div>
          <div className="stat-value text-primary">7</div>
          <div className="stat-desc">2 are waiting on you</div>
        </div>
        <div className="stat">
          <div className="stat-title">Builds today</div>
          <div className="stat-value text">24</div>
          <div className="stat-desc">All green</div>
        </div>
        <div className="stat">
          <div className="stat-title">Day streak</div>
          <div className="stat-value text-secondary">12</div>
          <div className="stat-desc">Keep it going</div>
        </div>
      </div>
    </div>
  );
}
