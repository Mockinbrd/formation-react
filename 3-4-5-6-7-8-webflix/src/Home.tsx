import React, {useCallback, useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import Input from "./Input";
import VerticalList from "./VerticalList";
import useStyles from "./Home.style";
import {Dispatch} from "@reduxjs/toolkit";


function Home(): JSX.Element {

    const classes = useStyles();

    const [searchParams, setSearchParams] = useSearchParams();
    const [value, setValue] = useState<string>(searchParams.get("q") || "");

    const onChange: (event: any) => void = useCallback(
        (event) => {
            setValue(event.target.value);
            setSearchParams(event.target.value ? {q: event.target.value} : {});
        },
        [setSearchParams]
    );

    const dispatch: Dispatch<any> = useDispatch();

    useEffect(() => {
        dispatch({type: "FETCH_MOVIES"});
    }, [dispatch]);

    const movies: [] = useSelector((state: { movies: [] }) => state.movies);

    return (
        <div className={classes.root}>
            <Input value={value} onChange={onChange}/>
            <VerticalList className={classes.list} data={movies}/>
        </div>
    );
}

export default Home;
