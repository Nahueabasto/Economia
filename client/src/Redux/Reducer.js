import { GET_DOLAR, GET_CRIPTO } from "./Actions";

const initialState = {
    dolar: [],
    cripto: [],
}

function reducer (state = initialState, action) {
switch (action.type) {
    case GET_DOLAR:
        return{
            ...state,
            dolar: action.payload,
        };
    case GET_CRIPTO:
        return{
            ...state,
            cripto: action.payload,
        };

        default:
        return state
      }}

      export default reducer;