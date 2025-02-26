import "../CSS/Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [val, setVal] = useState(0);
  return (
    <main>
      <div className="navbar">
        <div className="tag">
          <h1>Welcome to NoteBook</h1>
        </div>
        <div className="buttons">
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/signin">Sign in</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </main>
  );
}

export default Navbar;
