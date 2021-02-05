import {createStore,combineReducers,compose,applyMiddleware} from 'redux'

import artistReducer from '../reducers/artist'
import likesReducer from '../reducers/likes'
import thunk from 'redux-thunk'

const composedEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const mainReducer = combineReducers({artist:artistReducer,likes:likesReducer})
const initialState = {
    songs:{
        artists:[],
        error:false,
    },
    mylikes:{
        like:[],
    }
}

export default function configureStore(){
    return createStore(
        artistReducer,
        initialState,
        composedEnhacer(applyMiddleware(thunk))
    )
}