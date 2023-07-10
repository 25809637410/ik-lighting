import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 css
import data from './pages/productData'
import About from './pages/About'
import Detail from './pages/Detail';
import Cart from './pages/Cart'
import StyledComponents from './component/StyledComponents'

import {Container, Nav, Navbar, Row, Col} from 'react-bootstrap'; 
import {Routes, Route, Link, useNavigate} from 'react-router-dom' 
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './pages/store';

function App() {
  const navigate = useNavigate() 
  const [best] = useState(data)
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  return (
    <div className="App">
    <Navbar bg="dark" data-bs-theme="dark">
     <Container>
       <Navbar.Brand onClick={()=>{navigate('/')}}>IK-lighting</Navbar.Brand>
       <Nav className="me-auto">
         <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
         <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>
         <Nav.Link onClick={()=>{navigate('/about/info')}}>Information</Nav.Link>
         <Nav.Link onClick={()=>{navigate('/cart')}}>cart</Nav.Link>
       </Nav>
     </Container>
   </Navbar>
   <Routes>
     <Route path='/' element={
       <Container>
         <img src={process.env.PUBLIC_URL + '/images/vm_01.jpg'} alt='main' style={{width:"100%"}}/>
         <h2 style={{padding:50}}>Best 상품</h2>
         <Row>
           {
             best.map((best,index)=>{
               return (
                 <Col key={index}>
                   <Link to={`detail/${index}`}>
                     <img src={best.image} alt='상품img' style={{width:280, marginBottom: 30}}/>
                     <h4 style={{color:'#222'}}>{best.title}</h4>
                     <p>{best.style}</p>
                     <p>{best.price}</p>
                   </Link>
                   <button style={{marginBottom:30}} onClick={()=> {
                     dispatch(addItem({id: best.id, title: best.title, count: 1}))
                   }}>장바구니</button>
                 </Col>
               )
             })
           }
         </Row>
     </Container>
     }/>
     <Route path='about' element={<About/>}>
       <Route path='info' element={<div>Information</div>}/>
       <Route path='loca' element={<div>Location</div>}/>
     </Route>
     <Route path='detail/:id' element={<Detail best={best}/>}/>
     <Route path='cart' element={<Cart/>}/>
   </Routes>
 </div>
); //const navigate = useNavigate() → 훅
};

export default App;
