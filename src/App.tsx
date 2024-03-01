import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Favorites from "./pages/Favorites/Favorites";
import UserPosts from "./pages/UserPosts/UserPosts";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<MainPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/userPosts/:userId" element={<UserPosts />} />
      </Routes>
    </>
  );
}

export default App;
