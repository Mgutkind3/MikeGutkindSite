import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { AboutMe } from './pages/AboutMe';
import { Adventures } from './pages/Adventures';
import { Projects } from './pages/Projects';
import { Resources } from './pages/Resources';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
    <NavBar />
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/adventures" element={<Adventures />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resources" element={<Resources />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
