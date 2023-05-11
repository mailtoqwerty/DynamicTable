import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ExtractionDropdown() {
  return (
    <Nav>
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <NavDropdown title="Extraction" id="extraction-dropdown">
                <NavDropdown.Item as={Link} to="/extraction">Option 1</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/extraction/option2">Option 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/extraction/option3">Option 3</NavDropdown.Item>
            </NavDropdown>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
    </Nav>   
  );
}

// Example usage in a navbar

