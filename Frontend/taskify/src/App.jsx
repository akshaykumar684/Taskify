import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, TaskDetails, NewTask } from "./Pages";
import { Navbar } from "./Components";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks/new" element={<NewTask />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
