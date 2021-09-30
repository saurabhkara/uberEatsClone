let defaultState={
    selectedItems:{items:[], total:0, restaurantName:''}
}

let cartReducer=(state=defaultState, action)=>{
    switch(action.type){
       
        case 'ADD_TO_CART': {
            let newState={...state};
            if(action.payload.checkboxValue){
                console.log('ADD to cart ....');
                newState.selectedItems={
                    items:[...newState.selectedItems.items, action.payload],
                    restaurantName:action.payload.restaurantName
                }
    
                
            }else{
                console.log("Remove from Cart")
                newState.selectedItems={
                    items:[
                    ...newState.selectedItems.items.filter((item)=>item.title!==action.payload.title)
                    ],
                    restaurantName:action.payload.restaurantName,
                }
            }
            console.log(newState, ' cart Reducer ');
            return newState

        }
           
        default:return state;
    }
}


export default cartReducer;