export default function(state={},action){
    switch(action.type){
        case "GET_ARTIST_DATA":
            return{
                ...state,
                artists:action.payload
            }
            case "SET_ERROR":
                return{
                    ...state,
                    error:action.payload
                }
              
            default:
                return state
    }
}