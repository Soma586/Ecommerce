import redux, {createStore} from 'redux'



export function increment(){
    return{
        type : "INCREMENT"
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
    age : 20,
    favoritethings : [],

}


function reducer(state = initstate,action){
    switch(action.type){
        case "INCREMENT" :
            let newvalue = state.age + 1
            return{
                ...state,
                 age : state.age + 1
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