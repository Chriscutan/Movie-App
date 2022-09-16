import {Routes, Route} from 'react-router-dom';

import Navigation from "./Navigation/Navigation";
import AddMovies from './Pages/AddMovies';
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddMovies />} />
        </Routes>
    </div>
  );
}

export default App;
