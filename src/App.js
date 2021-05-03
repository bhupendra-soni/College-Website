import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Navbar, NavDropdown, Nav, Button, Card, Container, Row, Col} from 'react-bootstrap';
import Test from './components/Slide';
import Footer from './components/Footer';
import Img3 from './components/images/img 8.jpg';
import Img4 from './components/images/img 9.jpg';
import Img5 from './components/images/img 10.jpg';
import Img6 from './components/images/img 11.jpg';

function App() {
  return (
    <div>
      
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">SUNSTONE EDUVERSITY</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <NavDropdown title="Programs" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Campuses" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#features">Fee Structure</Nav.Link>
      <Nav.Link href="#pricing">Faculty</Nav.Link>
      <Nav.Link href="#pricing">Blog</Nav.Link>
      <NavDropdown title="About Us" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
    <Button variant="outline-success">Login</Button>{' '}
      <Button as="input" type="submit" value="Apply Now" />{' '}
    </Nav>
  </Navbar.Collapse>
</Navbar>
<Test />
<ul>
<Container>
  <Row>
    <Col><Card className="Cardmove">
  <Card.Img className="Cardio" src={Img3} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Noida International University</Card.Title>
    <Card.Text>
      Campus
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card></Col>
    <Col><Card className="Cardmove">
  <Card.Img className="Cardio" src={Img4} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>GD GOENAKA UNIVERSITY</Card.Title>
    <Card.Text>
     Campus
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card></Col>
  </Row>
  <Row>
    <Col><Card className="Cardmove">
  <Card.Img className="Cardio" src={Img5} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>JECRC</Card.Title>
    <Card.Text>
      Campus
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card></Col>
    <Col><Card className="Cardmove">
  <Card.Img className="Cardio" src={Img6} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>RAHAT-BOHRA-UNIVERSITY</Card.Title>
    <Card.Text>
     Campus
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card></Col>
  </Row>
</Container>
</ul>
<Footer />
    </div>
  );
}  

export default App;
