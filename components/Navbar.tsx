import { Navbar, Nav } from 'react-bootstrap'

export const BlogNavbar = () => {
  return (
    <Navbar className="fj-navbar fj-nav-base" bg="transparent" expand="lg">
      <Navbar.Brand className="fj-navbar-brand">
        <a href="#">Tahara Kazuki</a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ml-auto">
          <Nav.Link className="fj-navbar-item fj-navbar-link" href="/">
            Home
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
