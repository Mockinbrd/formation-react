import React from "react";
import data from "./data.json";
import useStyles from "./Genre.style";

function Genre({id}): JSX.Element {

    const classes: any = useStyles();

    const label: string = data.genres[id];

    if (!label) return null;

    return (
        <div data-testid="genre" className={classes.root}>
            {label}
        </div>
    );
}

export default Genre;
