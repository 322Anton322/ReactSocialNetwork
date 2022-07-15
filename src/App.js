import logo from "./logo.svg";
import "./App.css";
import Header from "./componets/Header/Header";
import Navbar from "./componets/NavBar/Nav";
import Profile from "./componets/Profile/Profile";
import Dialogs from "./componets/Dialogs/Dialogs";
import Music from "./componets/Music/Music";
import News from "./componets/News/News";
import { Routes, Route } from "react-router-dom";
import Settings from "./componets/Settings/Settings";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      {/*<Profile/>*/}
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/profile/"
            element={<Profile state={props.appState.postsPage} />}
          />
          <Route
            path="/dialogs/*"
            element={<Dialogs state={props.appState.dialogsPage} />}
          />
          <Route path="/news/" element={<News />} />
          <Route path="/music/" element={<Music />} />
          <Route path="/settings/" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
