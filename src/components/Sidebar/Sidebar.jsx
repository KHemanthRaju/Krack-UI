import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive && "var(--primary-dark)",
    backgroundColor: isActive && "var(--secondary-color)",
    padding: "5px 10px",
    borderRadius: "5px"
  });

  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink
            to="/components/avatar"
            className="component-item"
            style={getActiveStyle}
          >
            Avatar
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/components/alert"
            className="component-item"
            style={getActiveStyle}
          >
            Alert
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/components/badge"
            className="component-item"
            style={getActiveStyle}
          >
            Badge
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/components/button"
            className="component-item"
            style={getActiveStyle}
          >
            Button
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/components/headings"
            className="component-item"
            style={getActiveStyle}
          >
            Headings
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/components/card"
            className="component-item"
            style={getActiveStyle}
          >
            Card
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/components/text"
            className="component-item"
            style={getActiveStyle}
          >
            Text
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/components/images"
            className="component-item"
            style={getActiveStyle}
          >
            Image
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
