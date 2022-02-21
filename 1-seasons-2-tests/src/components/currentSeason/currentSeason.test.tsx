import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

import Season from "./index";

describe(Season.name, () => {
    beforeAll(() => {
        jest.useFakeTimers("modern");
        jest.setSystemTime(new Date(2022, 1, 9));
    });
    it("renders a title `Winter`", () => {
        render(<Season onClick={() => {
        }}/>);
        expect(screen.getByText("Winter")).toBeInTheDocument();
    });
    it("renders a text `50 days ago`", () => {
        render(<Season onClick={() => {
        }}/>);
        expect(screen.getByText("50 days ago")).toBeInTheDocument();
    });
    afterAll(() => {
        jest.useRealTimers();
    });
});