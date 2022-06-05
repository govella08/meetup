import { Route, Switch, Routes } from "react-router-dom";
import AllMeetupPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllMeetupPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
      </Routes>
    </div>
  );
}

export default App;
