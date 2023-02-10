import React, { ChangeEvent} from 'react'
import { useDispatch } from 'react-redux';
import { addNote} from './redux/actions/action';



export const NewNoteInput : React.FC = () =>{

    const dispatch = useDispatch();

    const [noteInputFiled, setNoteInputFiled] = React.useState("")  // to get the value from input
    const [id, setId] = React.useState(0)       // to track the note

    const InputNote = (event : ChangeEvent<HTMLInputElement>) => {
        setNoteInputFiled(event.target.value);
    }

    const onAddNoteClick = () => {
        setId(id=>id+1);
        dispatch(addNote(noteInputFiled, id));
    }

    return(
        <>
        <div>
            <input type="text" name = "note" placeholder='Note'
                onChange={InputNote}/>
            <button onClick={onAddNoteClick}>Add note</button>
        </div>
        </>
    )
}

