import logo from "./logo.svg";
import "./App.css";
import { Button } from "@material-tailwind/react";
import { Navigationar, NavigationBar } from "./components/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookForm from "./components/BookForm";
import NewBook from "./pages/NewBook";
import BookCardDetail from "./components/BookCardDetail";
import BookDetail from "./pages/BookDetail";
import EditBook from "./pages/EditBook";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/book" element={<NewBook />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/book/:id/edit" element={<EditBook />} />
      </Routes>
    </Router>
  );
}

export default App;
