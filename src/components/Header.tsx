import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => (
  <Navbar bg='dark' data-bs-theme='dark' className='bg-body-tertiary'>
    <Container>
      <Navbar.Brand>
        <img
          src='react-bootstrap-logo.svg'
          width='30'
          height='30'
          className='d-inline-block align-top'
        />{' '}
        Reactoon
      </Navbar.Brand>
    </Container>
  </Navbar>
);

export default Header;
