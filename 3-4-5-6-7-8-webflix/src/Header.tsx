import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import useStyles from "./Header.style";

function Header(): JSX.Element {

    const classes = useStyles();

    const favorites = useSelector((state: { favorites: [] }) => state.favorites);

    return (
        <header className={classes.root}>
            <h1 className={classes.title}>Webflix</h1>
            <nav className={classes.nav}>
                <Link className={classes.link} to="/">
                    Home
                </Link>
                <Link className={classes.link} to="/favorites">
                    {`Favorites (${favorites.length})`}
                </Link>
            </nav>
        </header>
    );
}

Header.defaultProps = {
    favorites: [],
};

export default Header;
