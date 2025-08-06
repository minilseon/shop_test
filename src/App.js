import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import data from './pages/data';
import { useDispatch } from 'react-redux';
import { addItem } from './pages/store';

import About from './pages/About';
import Information from './pages/Information';
import Location from './pages/Location';
import Details from './pages/Details';
import Cart from './pages/Cart'

function App() {

  const navigate = useNavigate();
  const [bests] = useState(data);
  const dispatch = useDispatch();

  return (
    <div className="App">

       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => {navigate('/')}}>Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => {navigate('about')}}>About</Nav.Link>
            <Nav.Link onClick={() => {navigate('about/info')}}>Information</Nav.Link>
            <Nav.Link onClick={() => {navigate('about/loca')}}>Location</Nav.Link>
            <Nav.Link onClick={() => {navigate('cart')}}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={

          <Container>
            <img src={process.env.PUBLIC_URL + '/images/visual_main_01.jpg'} alt="비주얼 메인" />
            <h2>Best 상품</h2>
            <Row className='best_box'>
              {
                bests.map((best, index) => {
                  return (
                    <Col >
                      <Link className='thumnail' to={`details/${index}`}>
                        <img src={best.image} style={{width: 280}}/>
                        <h4 className='title'>{best.title}</h4>
                        <p className='desc'>{best.desc}</p>
                        <p className='price'>{best.price}</p>
                      </Link>

                      <button onClick={
                        () => {
                          dispatch(addItem({id: best.id, title: best.title, count: 1}))
                        }
                      }>장바구니</button>

                    </Col>
                  )
                })
              }
            </Row>
          </Container>

        } />
        <Route path='about' element={<About />}>
          <Route path='info' element={<Information />} />
          <Route path='loca' element={<Location />} />
        </Route>
        <Route path='details/:id' element={<Details bests={bests} />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
      
    </div>
  );
}

export default App;
