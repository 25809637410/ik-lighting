import React from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeYear, deleteItem, addCount, subCount } from './store';

export default function Cart() {  
  const state = useSelector((state)=> state)
  const dispatch = useDispatch() //useDispatch: 변경함수를 사용하는 hooks
    
    
  return (
    <div>
      <h2 style={{padding:30}}><span style={{color: 'blue', fontWeight: 'bold'}}>({state.user.name})</span> 님의 장바구니</h2>
      <button style={{border:'none', borderRadius:'10px', padding: 10}} onClick={() => dispatch(changeName())}>닉네임 보이기</button> 
      <h3 style={{padding:20}}>회원가입기간: {state.user.memberYear} 년</h3>
      <button style={{border:'none'}} onClick={() => dispatch(changeYear(1))}>+</button>
      <button style={{border:'none'}} onClick={() => dispatch(changeYear(-1))}>-</button>

      
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>상품 번호</th>
          <th>상품명</th>
          <th>개수</th>
          <th>변경</th>
        </tr>
      </thead>
      <tbody>
        {
          state.cart.map((item, i) => {
            return(
              <tr key={i}>
              <td>{state.cart[i].id}</td>
              <td>{state.cart[i].title}</td>
              <td>
                <button style={{border: 'none'}} onClick={() => dispatch(subCount(state.cart[i].id))}>-</button>
                {state.cart[i].count}
                <button style={{border: 'none'}} onClick={() => dispatch(addCount(state.cart[i].id))}>+</button>
                </td>
              <td>
                <button style={{backgroundColor: '#F2BE22', border:'1px solid #D21312'}} onClick={() => dispatch(deleteItem(state.cart[i].id))}>삭제</button>
              </td>
            </tr>
            )           
          }
          )
        }
      </tbody>
    </Table>      
    </div>
  )
}