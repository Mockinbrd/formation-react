type Winter = 'Winter';
type Falls = 'Falls';
type Summer = 'Summer';
type Spring = 'Spring';
export type Season = Winter | Falls | Summer | Spring;

const winter: Winter = 'Winter';
const falls: Falls = 'Falls';
const summer: Summer = 'Summer';
const spring: Spring = 'Spring';

export const currentDate = new Date();
export const currentYear = currentDate.getFullYear();

export const seasons = {
    [winter]: {
        date: new Date(currentYear, 11, 21),
        nextSeason: spring
    },
    [falls]: {
        date: new Date(currentYear, 8, 23),
        nextSeason: winter
    },
    [summer]: {
        date: new Date(currentYear, 5, 21),
        nextSeason: falls
    },
    [spring]: {
        date: new Date(currentYear, 2, 20),
        nextSeason: summer
    }
};


export const getCurrentSeason = (): Season => {

    for (const [key, element] of Object.entries(seasons)) {
        if (currentDate > element.date) return key as Season;
    }
    return winter;

}