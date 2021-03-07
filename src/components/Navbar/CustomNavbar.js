import React from "react";

import Navbar from "react-bootstrap/Navbar";

import "./CustomNavbar.css";

const CustomNavbar = ({
  bg,
  variant,
  expand,
  className = "",
  brandText,
  ...props
}) => {
  return (
    <Navbar
      collapseOnSelect
      bg={bg}
      variant={variant}
      expand={expand}
      className={`CustomNavbar ${className}`}
      {...props}
    >
      <Navbar.Brand href="/" className="font-weight-bold">
        {brandText}
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>Rovers in Mars</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
