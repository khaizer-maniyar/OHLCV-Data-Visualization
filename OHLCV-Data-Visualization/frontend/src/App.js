import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

// Components imports
import Dashboard from "./pages/dashboard"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
