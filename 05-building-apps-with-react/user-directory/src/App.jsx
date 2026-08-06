import { Route, Routes } from "react-router";
import About from "./pages/About";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import UsersLayout from "./layouts/UsersLayout";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/users" element={<UsersLayout />}>
          <Route index element={<Users />} />
          <Route path=":id" element={<UserDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
