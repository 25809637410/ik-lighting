import {configureStore, createSlice} from "@reduxjs/toolkit"; 

const user = createSlice({
  name: 'user',
  initialState: {name: '홍길동', memberYear: 1},
  reducers: {
   
    changeName(state){
      state.name = state.name + ' : Green'
    },
    changeYear(state, action){
      state.memberYear += action.payload
    } 
  }
}) //변경 함수


//export const { changeName } = user.actions //actions는 변경함수를 의미
export const { changeName, changeYear } = user.actions 
//cart_State

const cart = createSlice({
  name: 'cart',
  initialState: [], //카트에 데이터가 없어야 하기 때문에 초기값은 없음
  reducers:{
    addItem(state, action){
      //state.push(action.payload)
      const index = state.findIndex((findId) => {return findId.id === action.payload.id})//내가 가진 아이디와 action으로 받은 아이디의 값이 일치한다면 => true를 return하게 됨
      if(index > -1) { //-1보다 큰 값이라면 인덱스 값이 존재한다는 것
        state[index].count++ //그렇다면 카운트를 증가시켜라
      } else{
        state.push(action.payload) //그렇지 않다면 push시켜라
      }
    }, //addItem

    deleteItem(state, action){
      const index = state.findIndex((findId) => {return findId.id === action.payload})//비교대상이 아니기 때문에 payload.id를 하게 되면 오류 발생
      state.splice(index, 1)
    }, //deteteItem
    
    addCount(state, action){
      const index = state.findIndex((findId) => {return findId.id === action.payload})
      state[index].count++
    },

    subCount(state, action){
      const index = state.findIndex((findId) => {return findId.id === action.payload})
      if(index > -1) { //-1보다 큰 값이라면 인덱스 값이 존재한다는 것
        state[index].count-- //그렇다면 카운트를 증가시켜라
      }
    }

  }
})

export const { addItem, deleteItem, addCount, subCount } = cart.actions

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer
  }
})