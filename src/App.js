import "./App.css";
import Routers from "./router/Routers";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routers />
    </Router>
  );
}
