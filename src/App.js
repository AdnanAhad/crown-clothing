import "./App.css";
import HomePage from "./routes/homepage/HomePage";
import { Routes, Route, Outlet } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation";

const Shop = () => {
  return <h1>Hi I am Shop</h1>;
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
