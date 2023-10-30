import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const components = [
    "avatar",
    "alert",
    "badge",
    "button",
    "card",
    "headings",
    "text",
    "image"
  ];

  const handleSearch = () => {
    if (searchInput.trim() != "") {
      if (components.includes(searchInput.toLowerCase())) {
        navigate(`/components/${searchInput.toLowerCase()}`);
      } else {
        alert("Sorry! No such components found!");
      }
    }
    setSearchInput("");
  };

  return (
    <>
      <nav className="navbar">
        <div className="left-nav" onClick={() => navigate("/")}>
          <h2 style={{ marginLeft: "10px", fontStyle: "italic" }}>
            Krack - UI
          </h2>
        </div>
        <div className="middle-nav">
          <div className="searchbar">
            <input
              type="text"
              placeholder="Search components..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
        <div className="right-nav">
          <a href="/">Home</a>
          <a href="/components">Components</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
