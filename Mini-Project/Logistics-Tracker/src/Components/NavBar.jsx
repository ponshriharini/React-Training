import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
      <Navbar className="navbar-bg">
        <Container>
          <Navbar.Brand href="#home" className='text-white fw-bold fst-italic'>Xpress Tracker</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <button className='btn button' onClick={() => {}}>Track Shipment</button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

export default NavBar;
