import {createStore,combineReducers,compose,applyMiddleware} from 'redux'

import artistReducer from '../reducers/artist'
import likesReducer from '../reducers/likes'
import thunk from 'redux-thunk'

const composedEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const initialState = {
    songs:{
        artists:[],
        error:false,
    },
    mylikes:{
        like:[],
    }
}
const mainReducer = combineReducers({songs:artistReducer,mylikes:likesReducer})

export default function configureStore(){
    return createStore(
        mainReducer,
        initialState,
        composedEnhacer(applyMiddleware(thunk))
    )
}