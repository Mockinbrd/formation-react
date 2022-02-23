import React from "react";
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";

import {favoritesSlice} from "./slices";
import useStyles from "./MovieCard.style";
import {Dispatch} from "@reduxjs/toolkit";

function MovieCard({id, poster_path, title}: { id: string, poster_path: string, title: string }): JSX.Element {

    const imageURL =
        poster_path && `https://image.tmdb.org/t/p/w92${poster_path}`;

    const classes = useStyles({imageURL});

    const favorites = useSelector((state: { favorites: [any] }) => state.favorites);

    const dispatch: Dispatch<any> = useDispatch();

    const addToFavorite = (event: { preventDefault: () => void; }): void => {
        event.preventDefault();
        dispatch(favoritesSlice.actions.toggle({id}));
    };
    return (
        <div className={classes.root}>
            <h2 className={classes.title}>{title}</h2>
            <button
                onClick={addToFavorite}
                className={classNames(classes.button, {
                    [classes.added]: favorites.includes(id),
                })}
            >
        <span role="img" aria-label="heart">
          ❤️
        </span>
            </button>
        </div>
    );
}

export default MovieCard;
