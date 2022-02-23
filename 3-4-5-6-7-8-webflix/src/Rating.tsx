import classNames from "classnames";
import React from "react";
import useStyles from "./Rating.style";

type MaximumStarsType = 5;
type RateType = 1 | 2 | 3 | 4 | 5;
const MAX_STARS: MaximumStarsType = 5;

function Rating({value = 0}: { value?: number }): JSX.Element {

    const classes = useStyles();

    const stars = Math.trunc(value) as RateType;

    return (
        <div>
            {Array.from({length: stars}, (v, k) => (
                <span role="img" aria-label="star" className={classes.star} key={k}>
          ⭐
        </span>
            ))}
            {Array.from({length: MAX_STARS - stars}, (v, k) => (
                <span
                    role="img"
                    aria-label="star"
                    className={classNames([classes.star, classes.empty])}
                    key={k}
                >
          ⭐
        </span>
            ))}
            <span className={classes.label}>{value.toFixed(1)} / 5</span>
        </div>
    );
}

Rating.defaultProps = {
    value: 0,
};

export default Rating;
