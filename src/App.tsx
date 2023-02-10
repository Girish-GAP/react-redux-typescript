import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteNote } from './redux/actions/action';
import { NewNoteInput } from './NewNoteInput';
import { NotesState } from './redux/reducers/notesReducer';
import { UpdateNoteInput } from './UpdateNoteInput';

function App() {

  const dispatch = useDispatch()

  // This is the function which pass our state object and get only required field from it
  // the function takes tha parameter of type NotesState 
  // NotesState is an interface of our state
  const data = useSelector<NotesState,        // type of our state
    NotesState["data"]    // type of return value of our useselector hook 
  >((state) => state.data);   // pass a function that recives state and return state.notes

  const [updateInputFiled, setupdateInputFiled] = React.useState("");
  const [updateid, setupdateid] = React.useState(0);

  const onDeleteClick = (note: string, id: number) => {
    dispatch(deleteNote(note, id));
  }

  const onUpdateClick = (note: string, id: number) => {
    setupdateInputFiled(note);
    setupdateid(id);
  }
  return (
    <>
      <NewNoteInput />
      <UpdateNoteInput setupdateInputFiled={setupdateInputFiled} updateInputFiled={updateInputFiled} updateid={updateid} />
      <hr />
      <ul>
        {data.map(pair => (
          <>
            <li
              key={pair.id}>{pair.note}: {pair.id}
              <button onClick={() => onDeleteClick(pair.note, pair.id)}>Delete</button>
              <button onClick={() => onUpdateClick(pair.note, pair.id)}>Update</button>
            </li>
          </>
        ))}
      </ul>
    </>
  );
}

export default App;
