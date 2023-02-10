import React, { ChangeEvent, useEffect, useState, FC } from 'react'
import { updateNote } from './redux/actions/action';
import { useDispatch } from 'react-redux';

interface ownProps {
    setupdateInputFiled(note : string) : void
    updateInputFiled : string;
    updateid : number;
}

export const UpdateNoteInput : FC<ownProps> = ({updateInputFiled, updateid, setupdateInputFiled}) => {

    const dispatch = useDispatch();

    const HandelOnChange = (event : ChangeEvent<HTMLInputElement>) => {
        setupdateInputFiled(event.target.value);
    }

    const onUpdateClick = () => {
        dispatch(updateNote(updateInputFiled, updateid ))
        setupdateInputFiled("")
    }

    return (
        <>
        <input type="text" 
         name = "updatenote"
            onChange={ HandelOnChange }
            value={updateInputFiled}
            />
        <button onClick={onUpdateClick}>UPDATE</button>
        </>
    )
}

