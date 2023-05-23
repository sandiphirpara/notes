import produce from "immer";
import { ADD_NOTES,EDIT_NOTES,DELETE_NOTES } from "./actionTypes";

const initialState = {
    loading:false,
    notes:[],
};

const dashboardReducer = produce((state = initialState, action) => {
    const { type,payload } = action;
    console.log(payload)
    switch (type) {
        
        case DELETE_NOTES:           
         let temp = state.notes.map((v, i) => {
            return i !== payload && v
          })
          state.notes = temp
      break
        case ADD_NOTES:
            return {
                ...state,
                notes: [...state.notes,payload],
                }              
        break;
        case EDIT_NOTES:
            state.notes.forEach(x => {
                if (x === payload.id) {
                  x.title = payload.title;
                  x.note = payload.note;
                }
              })           
        break;
        default:
            return state;
    }
});

export default dashboardReducer;
