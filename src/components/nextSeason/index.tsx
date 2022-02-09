import React, {useState} from 'react';
import {currentDate, getCurrentSeason, seasons} from "../constants";
import {formatDistance} from "date-fns";

function NextSeason(): JSX.Element {

    const [nextSeason] = useState<string>(seasons[getCurrentSeason()].nextSeason);

    return (
        <>
            <div className="modal">
                <div className="season-container">
                    <h2 className="title">{nextSeason}</h2>
                    <span>in</span>
                    <span className="countdown">
                        {formatDistance(seasons[nextSeason].date, currentDate)}
                    </span>
                </div>
            </div>
        </>
    )
}

export default NextSeason;