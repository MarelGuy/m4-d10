export default function(state={},action){
    switch(action.type){
        case "ADD_LIKE":
            return{
                ...state,
                like:state.jobs.concat(action.payload)
            }
            case "REMOVE_LIKE":
                return{
                    ...state,
                    like:[
                        ...state.jobs.filter(
                            (job)=> job.id !==action.payload
                           
                        )
                    ]
                }
              
            default:
                return state
    }
}