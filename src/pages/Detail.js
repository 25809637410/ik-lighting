import React from 'react'
import { useParams } from 'react-router-dom'
import { addItem } from './store'
import { useDispatch } from 'react-redux'

export default function Detail(props) {

  const {best} = props
  const {id} = useParams()
  const dispatch = useDispatch()
  
  return (
    <div>
      <h2 style={{padding: 20}}>Detail Page</h2>
      <img src={best[id].image} alt='img' style={{width:280}}/>
      <h4 style={{padding: 30}}>{best[id].title}</h4>
      <p style={{fontSize: '24px'}}>{best[id].price}</p>
      <p>{best[id].desc}</p>
      <button style={{margin: 20, padding: 10, fontSize: 16, borderRadius: 15, border:'none'}} onClick={() => {
        dispatch(addItem({id: best[id].id, title: best[id].title, count: 1}))
      }}>장바구니에 추가</button>
      <br/>
      <img src={process.env.PUBLIC_URL+'/images/detail.jpg'} alt='detail' style={{width:"100%"}}/>
    
    </div>
  )
};