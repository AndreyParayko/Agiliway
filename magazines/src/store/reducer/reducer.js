import { combineReducers } from "redux";
import magazinesReducer from "../../pages/Magazines/reducers/magazines.reducer";
import magazineReducer from "../../pages/Magazines/reducers/magazine.reducer";
import modal from "../../pages/Magazines/reducers/modal.reducer";


const rootReducer = combineReducers({
  magazines: magazinesReducer,
  magazine: magazineReducer,
  modal: modal
});

export default rootReducer;
