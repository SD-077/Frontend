import { Link } from "react-router";

export default function Home() {
  return (
    <div className="hero bg-base-200 rounded-box py-16">
      <div className="hero-content max-w-xl text-center">
        <div>
          <h1 className="text-4xl font-bold">User Directory</h1>
          <p className="py-6">
            This is a single page app with three views. The URL will change as
            we change pages. Notice how the page never reloads!
          </p>
          <Link to="/about" className="btn btn-primary">
            Learn more about this app
          </Link>
        </div>
      </div>
    </div>
  );
}
