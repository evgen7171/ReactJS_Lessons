import React, {useState} from "react";
import {Button, FormControl, FormHelperText, Input, InputLabel} from "@material-ui/core";

export const Form = ({fields, action, button}) => {
    const values = Object.fromEntries(new Map(fields.map(item => [
        [item], ''
    ])))
    // requires, validate
    const [data, setData] = useState(values);
    const setItem = (e, key) => {
        const value = e.target.value;
        setData({...data, [key]: value});
    }
    const submit = (e) => {
        e.preventDefault();
        action(data);
    }
    return <>
        <form className="col d-flex flex-column"
              onSubmit={submit}>
            {
                fields.map((field, key) =>
                    <FormControl key={key}>
                        <InputLabel htmlFor="my-input">{field}</InputLabel>
                        <Input id={`input-${field}`}
                               value={field.value}
                               onChange={(e) => setItem(e, field)}
                               aria-describedby="my-helper-text"/>
                        <FormHelperText id="my-helper-text">{field.error}</FormHelperText>
                    </FormControl>
                )
            }
            <Button variant="contained"
                    color="primary"
                    onClick={submit}
                    className="mt-3 form-submit">
                {button}
            </Button>
        </form>
    </>
}