import "./App.css";
import HomePage from "./routes/homepage/HomePage";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation";
import SignIn from "./routes/sign-in/SignIn";

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
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
