import { useNavigate } from "react-router-dom";
import "../Components/Components.css";

const db = [
  "Avatar",
  "Alert",
  "Badge",
  "Button",
  "Card",
  "Heading",
  "Text",
  "Images"
];

const Components = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* This is Components page */}
      <div className="components">
        <h1>All Components</h1>
        <ul className="components-list">
          {db.map((item) => (
            <li onClick={() => navigate(`/components/${item}`)}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Components;
