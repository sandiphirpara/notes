import { SET_USER,ADD_NOTES,EDIT_NOTES,DELETE_NOTES } from "./actionTypes";
import { toast } from "react-toastify"
export const addNotes = (data) => {
    return async dispatch => {
      try {
        dispatch(setAddNotes(data))
        toast.success("Notes added.")
      } catch (err) {
        //toast.error(err.response?.data?.message || err.message)
      }
    }
  }

  export const editNotes = (data) => {
    return async dispatch => {
      try {
        dispatch(setEditNotes(data))
        toast.success("Notes updated.")
      } catch (err) {
        console.log(err);
      }
    }
  }

  
  export const deleteNotes = (data) => {
    return async dispatch => {
      try {
        dispatch(setDeleteNotes(data))
        toast.success("Notes deleted.")
      } catch (err) {
        console.log(err);
      }
    }
  }

export const setDeleteNotes = data => ({
    type: DELETE_NOTES,
    payload: data,
});

export const setEditNotes = data => ({
    type: EDIT_NOTES,
    payload: data,
});

export const setAddNotes = data => ({
    type: ADD_NOTES,
    payload: data,
});

export const setUser = data => ({
    type: SET_USER,
    payload: data,
});
