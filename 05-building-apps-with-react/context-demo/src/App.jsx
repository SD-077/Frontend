import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-4xl p-8">
        <Home />
      </main>
    </>
  );
}

export default App;
