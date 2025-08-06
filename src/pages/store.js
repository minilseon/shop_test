import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: 'user',
  initialState: {name: '홍길동'},
  reducers: {
    changeName(state) {
    state.name = state.name
    },
  },
});

export const { changeName } = user.actions; //user_slice


const cart = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {

    addItem(state, action) {
      const index = state.findIndex((findId) => findId.id === action.payload.id)
      if(index > -1){
        state[index].count++;
      } else {
        state.push(action.payload);
      }
    }, //addItem

    deleteItem(state, action) {
      const index = state.findIndex((findId) => findId.id === action.payload);
      state.splice(index, 1);
    },

    addCount(state, action) {
      const index = state.findIndex((findId) => findId.id === action.payload);
      state[index].count++;
    },

    subCount(state, action) {
      const index = state.findIndex((findId) => findId.id === action.payload);
      state[index].count--;
    },

  }, //reducers
});

export const { addItem, deleteItem, addCount, subCount } = cart.actions; // cart_slice



/***************** store *****************/
export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});