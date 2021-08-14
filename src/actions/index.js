//Thunk Actions
import axios from 'axios';

export const fetchSmurfs = () => {
    return (dispatch) => {
        dispatch(smurfStart());
        axios.get(`http://localhost:3333/smurfs`)
        .then(res=>{
            dispatch(smurfSuccess(res.data));
            console.log(res.data)
        })
        .catch(err => {
            dispatch(smurfFail(err));
        })
    }
}

export const SMURF_START = 'SMURF_START';
export const smurfStart = ()=> {
    return({type: SMURF_START});
}

export const SMURF_SUCCESS = 'SMURF_SUCCESS';
export const smurfSuccess = (smurfs)=> {
    return({type: SMURF_SUCCESS, payload: smurfs})
}

export const SMURF_FAIL = 'SMURF_FAIL';
export const smurfFail = (error)=> {
    return({type: SMURF_FAIL, payload: error})
}

//Standard Actions
export const SMURF_ADD = 'SMURF_ADD';
export function addNewSmurf(name, position, nickname, description) {
    const newSmurf = { name:name, position:position, nickname:nickname , description:description  }
    console.log(newSmurf)
    return { type: SMURF_ADD, payload: newSmurf} };

export const SMURF_ERROR = 'SMURF_ERROR';
export function smurfError(error) {
    return { type: SMURF_ERROR, payload: error} };


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.