import "@testing-library/jest-dom";
import {getCurrentSeason} from "./components/constants";

describe("current", () => {
    describe("on january", () => {
        beforeAll(() => {
            jest.useFakeTimers("modern");
            jest.setSystemTime(new Date(2022, 0, 1));
        });
        it("returns winter season", () => {
            const season = getCurrentSeason();
            expect(season).toBe("Winter");
        });
        afterAll(() => {
            jest.useRealTimers();
        });
    });
    describe("on june", () => {
        beforeAll(() => {
            jest.useFakeTimers("modern");
            jest.setSystemTime(new Date(2022, 5, 1));
        });
        it("returns spring season", () => {
            const season = getCurrentSeason();
            expect(season).toBe("Spring");
        });
        afterAll(() => {
            jest.useRealTimers();
        });
    });
    describe("on december", () => {
        beforeAll(() => {
            jest.useFakeTimers("modern");
            jest.setSystemTime(new Date(2021, 11, 30));
        });
        it("returns winter season", () => {
            const season = getCurrentSeason();
            expect(season).toBe("Winter");
        });
        afterAll(() => {
            jest.useRealTimers();
        });
    });
});