export default function(state={},action){
    switch(action.type){
        case "ADD_LIKE":
            return{
                ...state,
                like:state.like.concat(action.payload)
            }
            case "REMOVE_LIKE":
                return{
                    ...state,
                    like:[
                        ...state.like.filter(
                            (li)=> li.id !==action.payload
                           
                        )
                    ]
                }
              
            default:
                return state
    }
}