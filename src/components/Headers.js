
import React from 'react';
import { Container, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Headers = ({ setSearchTerm }) => {
    const { carts } = useSelector((state) => state.allCart);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <Navbar style={{ height: "60px", background: "#E1AFD1", color: "black" }} expand="lg">
            <Container>
                <NavLink to="/" className="text-decoration-none mx-2">
                    <h3 className='text-dark'>Shop</h3>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form className="ml-auto">
                        <FormControl 
                            type="text" 
                            placeholder="Search" 
                            className="mr-sm-2" 
                            onChange={handleSearch} 
                        />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                    <NavLink to="/cart" className="text-decoration-none mx-2">
                        <div id='ex4'>
                            <span className='p1 fa-stack fa-2x has-badge' data-count={carts.length}>
                                <i className="fa-solid fa-cart-shopping"></i>
                            </span>
                        </div>
                    </NavLink>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Headers;
