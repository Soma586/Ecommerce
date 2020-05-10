import redux, {createStore} from 'redux'
import { StarRateSharp } from '@material-ui/icons';



export function increment(id){
    return{
        type : "INCREMENT",
        id
    }
}


export function decrement(){
    return{
        type: "DECREMENT"
    }
}


let initstate = {
    Name : "Ventus",
    gender : "Male",
    age : 0,
    items : [],
    totalquantity : 0
   // addedItems: []

}



function findquantity(state = initstate){
    // if(state.items === 0){
    //     return 0;
    // }else{
    //     let num = 0;

    //     for(let i =0; i < state.items.length; i++){
    //         num += state.items[i].quantity;
    //     }

    //     return num
    
    // }
    //let num = 5;

    //return num

}


function reducer(state = initstate,action){
    switch(action.type){
        case "INCREMENT" :
            let newvalue = state.age + 1

           // let addedItem = state.items.find(item=> item.id === action.id)
            console.log("added to cart")
            //console.log(action.id)
           // console.log(action.id.id)
           // console.log(action.id.img)
           //you need to change the id object sit it's less confusing
           console.log("print items")
           console.log(state.items)
           console.log(action.id)
            //let existed_item = state.items.includes( item => action.id.id === item.id)
            let existed_item = false;
            for(let i = 0; i < state.items.length; i++ ){
                if(action.id.id === state.items[i].id){
                   // console.log("pogchamp")
                    state.items[i].quantity +=1
                   existed_item = true
                    break
                }
            }

            let newQu = 0;
            for(let i = 0; i < state.items.length; i++ ){
                newQu += state.items[i].quantity
            }

            console.log("this is " + existed_item)
            if(existed_item){
                //existed_item.quantity += 1
                console.log("HELLLOROEORO")
                console.log(state.items)
               // console.log(existed_item.price)
                return{
                    ...state,
                    totalquantity : newQu
                }
            }
            else{
            return{
                ...state,
                 age : state.age + 1,
                 items : [...state.items, action.id],
                 totalquantity : state.totalquantity + 1
            }
        }
        case "DECREMENT" :
            return {
                ...state,
                age : state.age -1
            }
        default :
            return {...state}
            
    }

}

let store = createStore(reducer)

store.subscribe(() =>{
    console.log(store.getState())
})



export default store