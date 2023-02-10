import { StringNumberPair } from "../reducers/notesReducer"

// Define types for our action
export interface Action { 
    
    type : "ADD_NOTE"|"DELETE_NOTE" | "UPDATE_NOTE", 
    
    payload : {
        note : string,
        id : number
    } 
}

export const addNote = (note : string, id : number) : Action => ({
    type : "ADD_NOTE", 
    payload : {note, id}
})

export const deleteNote = (note : string, id : number) : Action=> ({
    type : "DELETE_NOTE",
    payload : {note, id}
})


export const updateNote = (note : string , id : number) : Action => ({
    type : "UPDATE_NOTE",
    payload : {note, id}
})