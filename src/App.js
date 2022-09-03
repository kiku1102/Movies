
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";

import Login from "./Page/Login";
function App() {
  return (
    <div>
      {/* <Routes>
      <Route path="/login" element={<Login />}></Route>
      </Routes> */}
      <Home />
    </div>
  );
}

export default App;
