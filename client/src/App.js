import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import Container from "react-bootstrap/Container"

import "bootstrap/dist/css/bootstrap.min.css"
import './style.css';

import Header from './components/Header';

import Home from "./pages/Home"
import SingleEvent from "./pages/SingleEvent"
import LoginSignup from "./pages/LoginSingup"
import CreateEvent from "./pages/CreateEvent";
import Signup from './pages/Signup'


function App() {
  return (
    <>
      <Header></Header>
      <Container>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginSignup />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/create" element={<CreateEvent />} />
            <Route path="/event">
              <Route path=":id" element={<SingleEvent />} />
            </Route>
          </Routes>
        </Router>
      </Container>
    </>
  );
}

export default App;
