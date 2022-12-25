import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:username" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
