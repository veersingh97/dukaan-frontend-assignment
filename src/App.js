import "./App.css";
import Sidebar from "./components/sidebar";
import Mainbody from "./components/mainbody";

function App() {
  return (
    <div className="grid grid-cols-custom">
      <Sidebar />
      <Mainbody />
    </div>
  );
}

export default App;
