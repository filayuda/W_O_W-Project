import React, { useState, useContext } from 'react'
import { UserContext } from '../context/userContext';
import { Button, Col, Container, Stack, Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

import FormModal from '../components/modal/Modal'
import Login from '../components/modal/Login'
import Register from '../components/modal/Register'

import pcPhone from '../img/pcphone.png'
import Logo from '../img/logo.svg'


const Landing = () => {
    const navigate = useNavigate();
    const [state, dispatch] = useContext(UserContext);
    const [showRegister, setShowRegister] = useState(false);

    const handleShowRegister = () => {
        setShowRegister(true);
    };
    const handleCloseRegister = () => {
        setShowRegister(false);
    };

    const handleShowLogin = () => {
        dispatch({ type: "showLoginPopup" });
    };
    const handleCloseLogin = () => {
        dispatch({ type: "hideLoginPopup" });
    };

    const toggleToRegister = () => {
        setShowRegister(true);
        dispatch({ type: "hideLoginPopup" });
    };

    const toggleToLogin = () => {
        dispatch({ type: "showLoginPopup" });
        setShowRegister(false);
    };

    const checkAuth = () => {
        if (state.login === true) {
            navigate("/templates");
        }
    };
    checkAuth();

    return (
        <>
            <FormModal show={state.showLoginPopup} handleClose={handleCloseLogin}>
                <Login toggle={toggleToRegister} handleClose={handleCloseLogin} />
            </FormModal>
            <FormModal show={showRegister} handleClose={handleCloseRegister}>
                <Register toggle={toggleToLogin} handleClose={handleCloseLogin} />
            </FormModal>

            <Navbar fixed="top" bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand className='ps-5'>
                        <img src={Logo} width="100%" className="d-inline-block align-top" alt="bimLink" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        </Nav>
                        <Button variant="light" style={{ color: "black", border: "none" }} className="navbut" onClick={handleShowLogin}>Login</Button>
                        <Button variant="warning" style={{ width:"120px", height:"35px", borderRadius:"15px", marginRight:"40px", color:"white", fontSize:"13px", fontWeight:"bold" }} onClick={handleShowRegister}> Registrasi </Button>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container fluid className='Containerx'>
                <Stack direction="horizontal" gap={2} className="head">
                    <Col md="6" className='ps-5'>
                        <h1 style={{ fontSize:"80px", color:"white", marginBottom:"30px" }}>
                        <p>The Only Link</p>
                        <p>You'll Ever Need</p>
                        </h1>
                        <p style={{ color:"white", letterSpacing:"1px", lineHeight:"5%" }}>Add a link for your Social Bio and optimize your</p>
                        <p style={{ color:"white", letterSpacing:"1px", marginBottom:"40px"}}>social media traffic</p>
                        <p style={{ color:"white", letterSpacing:"1px", }}>safe, fast and easy to use</p>
                        <Button style={{ backgroundColor:"black", width:"220px", height:"35px", borderRadius:"10px", marginTop:"30px", color:"white", fontSize:"16px", border:"1px solid black" }} onClick={handleShowRegister}> Get Started For Free </Button>
                    </Col>
                    <Col xs lg="6" className='pe-5'>
                        <img src={pcPhone} alt="dumbLink" style={{ width: '100%' }} />
                    </Col>
                </Stack>
            </Container>
        </>
    )
}

export default Landing
