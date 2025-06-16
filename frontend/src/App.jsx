import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Upload from "./pages/UploadPage";
import ViewFile from "./pages/ViewFile";
import Dashboard from "./pages/Dashboard";
import AdminLogin from "./pages/AdminLogin";
import Footer from "./components/Footer";
import About from "./pages/About";


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/view/:id" element={<ViewFile />} />
        <Route path="/adminpanel">
            <Route path="" element={<Dashboard />} />
            <Route path="login" element={<AdminLogin />} />
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
