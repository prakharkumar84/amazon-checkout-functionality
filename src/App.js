import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Components/Checkout";
function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/"
            element={<Home/>}>
          </Route>
          <Route path="/checkout"
            element={<Checkout/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
