import React, { Component } from 'react'
import { Container, FormControl, Nav, Navbar, NavbarBrand, Form } from 'react-bootstrap'
import logo from './logo192.png'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contacts from '../Pages/Contacts'
import Blog from '../Pages/Blog'
export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar expand='md' bg='dark' variant='dark' pt='1' pb='1'>
                    <Container>
                        <NavbarBrand href="/welcome">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                            E-Store
                        </NavbarBrand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse id='responcive-navbar-nav'>
                            <Nav className='me-auto'>
                                <Nav.Link href='/welcome'> Home </Nav.Link>
                                <Nav.Link href='/about'> About us </Nav.Link>
                                <Nav.Link href='/contacts'> Contacts </Nav.Link>
                                <Nav.Link href='/blog'> Blog </Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl
                                    type='text'
                                    placeholder='Search'
                                    className='mr-sm-2'
                                    size='md'
                                />
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Routes>
                        <Route path='/welcome' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contacts' element={<Contacts />} />
                        <Route path='/blog' element={<Blog />} />
                    </Routes>
                </Router>
            </>
        );
    }
}
