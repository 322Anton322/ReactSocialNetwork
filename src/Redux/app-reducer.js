import { getAuthUserData } from "./auth-reducer";
const SET_INITIALAZED_SUCCESS = "SET_INITIALAZED_SUCCESS";

let initialState = {
  initialazed: false  
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALAZED_SUCCESS:
      return {
        ...state,
        initialazed: true,
      };

    default:
      return state;
  }
};
export const initialazedSuccess = () => ({ type: SET_INITIALAZED_SUCCESS});

export const initialazeApp = () => (dispatch) =>{
  let promis = dispatch(getAuthUserData());
  dispatch(initialazedSuccess());
  Promise.all([promis]).then(() =>{
    dispatch(initialazedSuccess());
  })
}


export default appReducer;