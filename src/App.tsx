import "./App.scss";
import { Outlet } from "react-router-dom";
import FooterNavigation from "./components/FooterNavigation";

function App() {
  return (
    <div className="app">
      <Outlet />
      <FooterNavigation />
    </div>
  );
}

export default App;
