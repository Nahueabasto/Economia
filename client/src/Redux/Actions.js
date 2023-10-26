import axios from "axios";
export const GET_DOLAR = 'GET_DOLAR';
export const GET_CRIPTO = 'GET_CRIPTO';


export function getDolar(){
    return async function(dispatch){
        var json = await axios.get("/dolar",{
        })
        return dispatch({
            type: GET_DOLAR,
            payload: json.data
        })
    }
}

export function getCripto(){
    return async function(dispatch){
        var json = await axios.get("/cripto",{
        })
        return dispatch({
            type: GET_CRIPTO,
            payload: json.data
        })
    }
}