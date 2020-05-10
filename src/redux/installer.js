import redux, {createStore} from 'redux'



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

}


function reducer(state = initstate,action){
    switch(action.type){
        case "INCREMENT" :
            let newvalue = state.age + 1

            //let existed_item = state.items.find()
            return{
                ...state,
                 age : state.age + 1,
                 items : [...state.items, action.id]
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