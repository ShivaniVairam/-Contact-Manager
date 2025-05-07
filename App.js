
import './App.css';
// Add react bootstrap navbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



// router

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contacts from './Contacts';
import AddContacts from './AddContacts';


function App() {
  return (
    // step1
    <Router>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Contact-Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/"></Nav.Link>
            <Nav.Link href="/list">Contacts</Nav.Link>
            <Nav.Link href="/new" >New Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App;
