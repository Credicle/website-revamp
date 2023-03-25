import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} className="footer-col">
          <div className = "AboutUs">
            <h4 className="footer-heading">About Us</h4>
            <p className = "AboutUsText">
             Credicle computes Web3 wallet metrics for FinTechs in a privacy 
             preserving manner. Ensuring that  can allow your Web3 data to get to 
             work for you in the Web2 world without compromise. 
            </p>
          </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center mt-4">
            <p className="footer-copyright">&copy; 2023 Credicle Corporation. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
