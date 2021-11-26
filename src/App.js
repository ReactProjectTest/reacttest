import {
  Routes,
  Route
} from "react-router-dom";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import React, {useState} from 'react';
import Test from "./components/Test";

function App() {
  const [name, setName] = useState("");

  const eventHandler = (e) => {
    setName(e.target.value);
  }

  return (
    <>
    <Test />
    <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about" element={<About />}/>
    </Routes>
    <input type="text" placeholder={name} onChange={eventHandler}/>
    <p> {name} </p>
    </>
  );
}

export default App;
