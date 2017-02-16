import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers"

//const middleware = applyMiddleware(promise(), thunk, logger())
//export default createStore(reducer, middleware)

//TEST SERVER RENDERING
// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

export default createStore(reducer, preloadedState)
