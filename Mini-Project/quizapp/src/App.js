import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import HomePage from './Components/HomePage';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TrackingProvider } from './Context/TrackingContext';

function App() {
  return (
    <TrackingProvider>
      <div className="App">
        <div className="home-container">
          <NavBar />
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TrackingProvider>
  );
}

export default App;
