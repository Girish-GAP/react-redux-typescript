// In redux reducer the functions that populate the new values for your state
// Reducer accept two values
// 1) state which is the previous state value, 
// 2) this is basically an event containg the data to update the new state.
// function returns the new state value

import { stat } from "fs"
import { Action } from "../actions/action"

export interface StringNumberPair {
    note : string,
    id : number
  }

// Type of our state
export interface NotesState{
    data : StringNumberPair[]
}

const intialState : NotesState= {
    data : []
}



export const notesReducer = (state : NotesState = intialState , action : Action) => {
    switch(action.type){
        case "ADD_NOTE" : {
            // console.log("YO", action.payload);
            return {...state, 

                 data: [...state.data, action.payload ]  // basically adding new note here
                
            }
        // we will return new object with all the fields 
        //from the previous state but the fileds notes will be 
        // in new array with all the previous notes + action.payload
        }

        case "DELETE_NOTE" : {

            const index = action.payload.id;
            const newData = state.data.filter((data)=> data.id != index)
            return {    
                ...state, data : newData
            }
        }

        case "UPDATE_NOTE" : {
            
            const index = action.payload.id;
            const newData = state.data.map(
                (element)=> 
                    element.id !== index ? element : action.payload
            )
            return {
                ...state, data : newData
            }
        }

        default :   // action of any other type
            return state;
    }
}