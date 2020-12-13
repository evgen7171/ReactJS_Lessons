import React, {useState} from "react";
import {Button, FormGroup, TextField} from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import {useStyles} from "./useStyles";

export const ControlPanel = ({controller, setControlAction}) => {
    const classes = useStyles()
    const [value, setValue] = useState('')
    const handleChange = event => {
        setValue(event.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        controller('add', value);
        setValue('');
        setControlAction(true);
    }

    return <form onSubmit={onSubmit}>
        <FormGroup row>
            <TextField
                label="Введите сообщение..."
                value={value}
                onChange={handleChange}
                margin="none"
                variant="outlined" classes={{root: 'flex-grow-1 mr-2'}}
            />
            <Button variant="contained" color="primary" type="submit" className={classes.controlButton}>
                <DoneIcon/>
            </Button>
        </FormGroup>
    </form>
}