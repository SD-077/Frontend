import { Route, Routes } from "react-router";
import About from "./pages/About";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Users from "./pages/Users";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
      </Route>
    </Routes>
  );
}
