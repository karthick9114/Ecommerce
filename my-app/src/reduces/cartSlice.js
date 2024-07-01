import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
            itemsAdded:(state,action)=>{
                const addedItems = state.items.find((x)=>x.id===action.payload.id)
                if(addedItems)
                    {
                        addedItems.quantity +=1
                    }
                else{
                    state.items.push({...action.payload,quantity:1})
                }
            },
            itemsRemoved:(state,action)=>{
                    state.items = state.items.filter((x)=> x.id !== action.payload)
            }
    }

})

export default cartSlice.reducer
export const {itemsAdded,itemsRemoved} = cartSlice.actions