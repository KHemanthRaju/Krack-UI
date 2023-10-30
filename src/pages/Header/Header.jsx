import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ justifyContent: "center", alignItems: "center" }}>
      <h2>Your Unique Component Library</h2>
      <p style={{ margin: "30px" }}>
        A collection of innovative components for modern web development.
      </p>
      <Link
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "15px",
          fontSize: "18px",
          borderRadius: "10px",
          cursor: "pointer",
          textDecoration: "None"
        }}
        to="/components"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Header;
