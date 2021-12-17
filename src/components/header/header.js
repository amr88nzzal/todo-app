
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return ((<>
    <Navbar bg="info" variant="dark" sticky="top" style={{ height: '80px' }}>
      <Nav className="align-items-center" style={{ marginLeft: '30%' }}>
        <h1> To-Do - WebSite </h1>
      </Nav>
    </Navbar>
  </>)
  );
};

export default NavBar;