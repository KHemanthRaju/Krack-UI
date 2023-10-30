import Navbar from "./components/Navbar/Navbar";
import "./styles.css";
import { Routes, Route, Link } from "react-router-dom";
import Avatar from "./pages/Avatar/Avatar";
import Alert from "./pages/Alert/Alert";
import Sidebar from "./components/Sidebar/Sidebar";
import Components from "./pages/Components/Components";
import AvatarDoc from "./documentation/AvatarDoc/AvatarDoc";
import AlertDoc from "./documentation/AlertDoc/AlertDoc";
import BadgeDoc from "./documentation/BadgeDoc/BadgeDoc";
import Header from "./pages/Header/Header";
import ButtonDoc from "./documentation/ButtonDoc/ButtonDoc";
import HeadingsDoc from "./documentation/HeadingsDoc/HeadingsDoc";
import TextDoc from "./documentation/TextDoc/TextDoc";
import CardDoc from "./documentation/CardDoc/CardDoc";
import ImageDoc from "./documentation/ImageDoc/ImageDoc";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Sidebar /> */}

      <div className="components">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/components" element={<Components />} />
          <Route path="/components/Avatar" element={<AvatarDoc />} />
          <Route path="/components/Alert" element={<AlertDoc />} />
          <Route path="/components/Badge" element={<BadgeDoc />} />
          <Route path="/components/Button" element={<ButtonDoc />} />
          <Route path="/components/Headings" element={<HeadingsDoc />} />
          <Route path="/components/Card" element={<CardDoc />} />
          <Route path="/components/Images" element={<ImageDoc />} />
          <Route path="/components/Text" element={<TextDoc />} />
        </Routes>
      </div>
    </div>
  );
}
