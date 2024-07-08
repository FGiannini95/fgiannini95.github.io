import { useState } from 'react'
import { Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const NavbarHuesoCabra = () => {

  const [expanded, setExpanded] = useState(false);

  const handleSelect = () => {
    setExpanded(false);
  }

  return (
    <Navbar bg="body-tertiary" expand="sm" className='navPpl d-flex justify-content-center' expanded={expanded} >
      {/* <Navbar.Brand href="/">Home</Navbar.Brand>*/}
      <Navbar.Toggle aria-controls="navbarNav" className="mx-auto m-3" onClick={()=> setExpanded(!expanded)}/> 
      <Navbar.Collapse id="navbarNav" className="justify-content-center">
        <Nav className="mr-auto d-flex align-items-center" onSelect={handleSelect}>
          <Nav.Link as={Link} to="/" className="active" onClick={()=> setExpanded(false)}>Home</Nav.Link>
          <Nav.Link as={Link} to="/taller" onClick={()=> setExpanded(false)}>Taller</Nav.Link>
          <Nav.Link as={Link} to="/contacto" onClick={()=> setExpanded(false)}>Contacto</Nav.Link>
          <Nav.Link as={Link} to="/tienda" onClick={()=> setExpanded(false)}>Tienda</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
