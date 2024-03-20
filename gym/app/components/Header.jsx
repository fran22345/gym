"use client";

import { Button, Navbar } from "flowbite-react";

function Header() {
  return (
    <Navbar
      fluid
      rounded
      className="sticky top-0 border border-b-gray-200 shadow-md"
    >
      <Navbar.Brand href="#">
        <div>Bienvenido</div>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button href="../pages/login">Login</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
