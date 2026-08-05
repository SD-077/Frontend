// import Home from "./components/Home";
// import Navbar from "./components/Navbar";

import { useEffect, useState } from "react";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <main className="mx-auto w-full max-w-4xl p-8">
//         <Home />
//       </main>
//     </>
//   );
// }

// export default App;

export default function App() {
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);

  // setCounter(counter + 1); // --> Once I reach the end of the code, Re-render

  useEffect(() => {
    console.log("Component has mounted");
    setCounter(counter + 1);
  }, [toggle]);

  console.log(counter);

  return (
    <div>
      <h1>Test</h1>
      <button className="btn btn-primary" onClick={() => setToggle(!toggle)}>
        Click me
      </button>
    </div>
  );
}
