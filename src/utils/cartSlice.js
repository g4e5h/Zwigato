import {createSlice} from "@reduxjs/toolkit";

const cartSlice= createSlice({
                    name:"cart",
                    initialState:{
                        items:{}
                    },
                    reducers:{
                        addItem: (state, action)=>{
                             const {id,name,defaultPrice,price,imageId,quantity}= action.payload; 
                            
                             state.items.hasOwnProperty(id)? 
                             state.items[id]={...state.items[id], quantity:state.items[id].quantity+1}
                             :
                             state.items[id]={name,defaultPrice,price,imageId,quantity} 
                              
                        },
                        removeItem: (state, action)=>{
                              const {id}= action.payload; 
                            
                             if(state.items.hasOwnProperty(id)){
                                   state.items[id].quantity===1  && (delete state.items[id]);    
                                   state?.items[id]?.quantity>1 && (state.items[id]={...state.items[id], quantity:state.items[id].quantity-1})
                             }  
                              
                        },
                        emptyCart: (state)=>{
                              state.items={};
                        }
                    }
});

export default cartSlice.reducer;

export const {addItem, removeItem, emptyCart} = cartSlice.actions;