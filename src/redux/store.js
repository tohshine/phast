import { createStore, applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
//import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./reducer";

const middleware = [thunk];

export const store = createStore(
  reducer,
  compose(applyMiddleware(...middleware))
)