import { createSlice } from '@reduxjs/toolkit'

const cartState ={
    cart:[],
    cartTotalQuantity:0,
    cartTotalAmount : 0,
}
 const CartSlice = createSlice({
    name: 'cart',
    initialState: cartState, 
     
  
    reducers:{
        addToCart:(state,action)=>{
            const itemIndex = state.cart.findIndex((item)=>item.id === action.payload.id);
            if(itemIndex>=0){
                state.cart[itemIndex].cartQuantity += 1
            }
            else{
           const tempproduct = {...action.payload, cartQuantity:1} 
           state.cart.push(tempproduct);
            }
        },
        removeFromCart:(state,action)=>{
           const nextcartItem =state.cart.filter(
            cartitem=> cartitem.id !== action.payload.id
           );
           state.cart = nextcartItem;
        },
        decreaseCart(state, action){
            const itemIndex = state.cart.findIndex((item)=>item.id === action.payload.id);

            if(state.cart[itemIndex].cartQuantity > 1){
                state.cart[itemIndex].cartQuantity -= 1
            }
            else if(state.cart[itemIndex].cartQuantity === 1){
                const nextcartItem =state.cart.filter(
                    cartitem=> cartitem.id !== action.payload.id
                   );
                   state.cart = nextcartItem;
            }
        },
        clearCart(state,action){
            state.cart = [];
        },
        getTotals(state, action){
           let {total ,qunatity} = state.cart.reduce((cartTotal, cartItem)=>{
                const { price , cartQuantity} = cartItem;
                const itemTotal = price * cartQuantity;

                cartTotal.total +=  itemTotal
                cartTotal.qunatity += cartQuantity

                return cartTotal;
            },{
                total : 0,
                qunatity : 0,
            });
            state.cartTotalQuantity = qunatity;
            state.cartTotalAmount = total;
        }
    }
})

    // Action creators are generated for each case reducer function
export const { addToCart, removeFromCart , decreaseCart , clearCart , getTotals } = CartSlice.actions

export default CartSlice.reducer