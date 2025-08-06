import React from 'react';
import Table from 'react-bootstrap/Table';

import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, addCount, subCount } from './store';

export default function Cart() {

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h2> {state.user.name} 님의 장바구니</h2>

      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
      </thead>
      <tbody>
        {
          state.cart.map((item, i) => {
            return (
              <tr key={i}>
                <td>{state.cart[i].id}</td>
                <td>{state.cart[i].title}</td>
                <td>{state.cart[i].count}</td>
                <td>
                  <button onClick={() => dispatch(addCount(state.cart[i].id))}>+</button>
                  <button onClick={() => dispatch(subCount(state.cart[i].id))}>-</button>
                  <button onClick={() => dispatch(deleteItem(state.cart[i].id))}>삭제</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>
    </div>
  )
}
