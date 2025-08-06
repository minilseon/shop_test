import React from 'react'
import { useParams } from 'react-router-dom'
import { addItem } from './store';
import { useDispatch } from 'react-redux';

export default function Details(props) {

  const {bests} = props;
  const {id} = useParams();
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Details Page</h1>
      <img src={bests[id].image} style={{width: 500}} />
      <h4>{bests[id].title}</h4>
      <p>{bests[id].desc}</p>
      <p>{bests[id].price}</p>
      <button onClick={
        () => dispatch(addItem({id: bests[id].id, title: bests[id].title, count: 1}))
      }>장바구니</button>
    </div>
  )
}
