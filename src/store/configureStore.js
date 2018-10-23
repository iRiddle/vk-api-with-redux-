import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducers";
import { logger } from "redux-logger";
import thunk from 'redux-thunk'
export const store = createStore(rootReducer, applyMiddleware(thunk, logger)); //<--

// первый аргумент - функция-обработчик изменений (редьюсер)
// второй аргумент - начальное состояние
