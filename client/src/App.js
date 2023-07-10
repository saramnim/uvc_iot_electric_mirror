import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { ROUTE_ARR } from "./routes/route";
import HomePage from "./pages/Home";

function App() {
  return (
    <Router className="App">
      <Routes>
        {ROUTE_ARR.map((route, index) => {
          return (
            <Route path={route.path} element={<route.element />} key={index} />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
