import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import Documents from "./pages/Documents";
import { Tutorials } from "./pages/Tutorials";
import { Links } from "./pages/Links";
import { Remainders } from "./pages/Remainders";
import { Navbar } from "./components/Navbar"
import { SignUp } from "./pages/SignUp"
import LogIn from './pages/LogIn';


function App() {
  return (
    <>
    <Navbar />
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/links" element={<Links />} />
        <Route path="/remainders" element={<Remainders />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/logIn" element={<LogIn />} />
      </Routes>
    </Container>
    </>
  );
}

export default App;
