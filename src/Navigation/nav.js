import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import React from 'react';

export const MainNav = () => {
    return (
        <div className='main-header'>
            <Navbar className='main-nav'>
                <Nav>
                    <NavItem >
                        <NavLink className='main-nav__item' href="#/">Home</NavLink>
                    </NavItem>
                    <NavItem >
                        <NavLink className='main-nav__item' href="#/work">
                            Work
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
};