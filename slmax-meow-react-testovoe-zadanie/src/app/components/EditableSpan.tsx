import React, { ChangeEvent, useState } from 'react'
import { TextField } from '@mui/material'

type Props = {
    value: string
    onChange: (newValue: string) => void
}

export const EditableSpan = React.memo(function ({ value, onChange }: Props) {
    let [editMode, setEditMode] = useState(false)
    let [title, setTitle] = useState(value)
    console.log(title)
    const activateEditMode = () => {
        setEditMode(true)
        setTitle(value)
    }
    const activateViewMode = () => {
        setEditMode(false)
        onChange(title)
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode ? (
        // <TextField value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode} />
        <input value={title} onChange={changeTitle}  onBlur={activateViewMode} autoFocus/>
    ) : (
        <span onDoubleClick={activateEditMode}>{value}</span>
    )
})

//<input type="text" id="fname" name="fname" value="John"><br>