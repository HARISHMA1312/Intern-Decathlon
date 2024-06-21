import React from 'react';
import 'bootstrap';
import '../App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../assets/menu.png';
import Search from '../assets/search.png';
import Dec from '../assets/dec.png';
import User from '../assets/people.png';
import Support from '../assets/message.png';
import Store from '../assets/map.png';
import Wish from '../assets/like.png';
import Cart from '../assets/online-shopping.png';
import Popup from 'reactjs-popup';

export default function Navv() {




    const handleClick = (e) => {
        <Popup trigger={<button> Trigger</button>} position="right center">
            <div>Popup content here !!</div>
        </Popup>
    };

    return (
        <Navbar expand="lg" className='navbar '>
            <Container fluid>
                <Navbar.Brand className="d-flex align-items-center">
                    <img src={Menu} className='nav-icons' alt="Menu" />
                    <span className='span'>All Sports</span>
                    <img src={Dec} className='top-img' alt="Decathlon" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarResponsive" />
                <Navbar.Collapse id="navbarResponsive">
                    <div className="search-bar">
                        <div className="search-input-wrapper">
                            <img src={Search} alt='Search' className="search-icon" />
                            <input
                                type='text'
                                placeholder='Search for "Fishing Rods" |'
                            />
                        </div>
                    </div>

                    <Nav className="ms-auto nav-links">
                        <Nav.Link href="#location" className="location-link">
                            <div>
                                <div>Delivery Location</div>
                                <div className="location-code">560002 <a href="#change" className="change-link" onClick={handleClick}>CHANGE</a></div>
                            </div>
                        </Nav.Link>
                        <Nav.Link href="#signin"><img src={User} className='nav-icons' alt="User" />Sign In</Nav.Link>
                        <Nav.Link href="#store"><img src={Store} className='nav-icons' alt="Store" /> My Store</Nav.Link>
                        <Nav.Link href="#support"><img src={Support} className='nav-icons' alt="Support" /> Support</Nav.Link>
                        <Nav.Link href="#wishlist"><img src={Wish} className='nav-icons' alt="Wishlist" /> Wishlist</Nav.Link>
                        <Nav.Link href="#cart"><img src={Cart} className='nav-icons' alt="Cart" /> Cart</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
