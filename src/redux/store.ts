import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import catsReducer from "./reducers/reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["favorites"]
};

const rootReducer = combineReducers({
  catsReducer: persistReducer(persistConfig, catsReducer)
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
