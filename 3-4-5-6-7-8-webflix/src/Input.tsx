import React, {ChangeEventHandler} from "react";
import useStyles from "./Input.style.js";

function Input({value, onChange}: { value: string, onChange: ChangeEventHandler }) {
    const classes = useStyles();
    return (
        <input
            className={classes.root}
            type="text"
            value={value}
            onChange={onChange}
        />
    );
}

export default Input;
