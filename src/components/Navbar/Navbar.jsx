import React from 'react';
import './Navbar.css';
import { FaSearch, FaArrowRight } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';

const Navbar = () => {
    return (
            <div className='Nav'>

                    <div className="NavFirst">&nbsp;</div>

                    <div className="NavSecond">
                        <form className='NavForm'>
                            <input className='NavFormInput' type='text' placeholder="What Do You Want To Learn?" />
                            <FaSearch className='navFormIcon' />
                        </form>
                    </div>

                <div className="NavThird">
                    <form className='NavRightForm'>
                        <button className="NavLogin">
                            Login
                        </button>
                        <button className="NavJoin">
                            Join For Free <FaArrowRight className='NavJoinIcon' />
                        </button>
                    </form>
                </div>
            </div>
    )
}

export default Navbar