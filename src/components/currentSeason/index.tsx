import React, {useState} from 'react';
import {formatDistanceToNow} from 'date-fns';
import PropTypes from 'prop-types';
import {currentYear, getCurrentSeason, Season, seasons} from "../constants";

CurrentSeason.propTypes = {
    onClick: PropTypes.func.isRequired
}

function CurrentSeason({onClick}): JSX.Element {

    const [currentSeason] = useState<Season>(getCurrentSeason());

    return (
        <>
            <div className="season-container">
                <h2 className="title">{currentSeason}</h2>
                <span>since</span>
                <span className="countdown">
                    {formatDistanceToNow(seasons[currentSeason].date.setFullYear(currentYear - 1))}
                </span>
            </div>
            <div>
                <button onClick={onClick}>And then ?</button>
            </div>
        </>
    )
}

export default CurrentSeason;