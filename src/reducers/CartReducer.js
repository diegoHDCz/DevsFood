const initialState = {
   products:[],
   adress:[],
   discount:0,
   delivery:0

};

export default (state = initialState, action) => {
    let products = [...state.products]
   switch(action.type){
       case 'ADD_PRODCUT': 
       
        let id = action.payload.data.id

        let index = products.findIndex(item=>item.id === id)
        if(index > -1){
            products[index].qt += action.payload.qt;
        }else{
            products.push({
                ...action.payload.data,
                qt: action.payload.qt
            })
        }

        return {...state, products}
    break;
    case 'CHANGE_PRODCUT':    
        
        if(products[action.payload.key]){
        switch(action.payload.type){
            case '-':
                products[action.payload.key].qt--;

                if(products[action.payload.key].qt <= 0) {
                    products = products.filter((item,index)=>index !=action.payload.key)
                }  
            break;
            case '+':
                products[action.payload.key].qt++;      
            break
        }}

        return {...state, products}
    break;
    }
   

    return state;
}