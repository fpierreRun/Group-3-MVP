import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import Container from "react-bootstrap/Container"

import "bootstrap/dist/css/bootstrap.min.css"
import './style.css';

import EventCalendar from './components/EventCalendar';
import Header from './components/Header';

import Home from "./pages/Home"
import SingleEvent from "./pages/SingleEvent"
import LoginSignup from "./pages/LoginSingup"


function App() {
  return (
    <>
      <Header></Header>
      <Container>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginSignup />} />
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
