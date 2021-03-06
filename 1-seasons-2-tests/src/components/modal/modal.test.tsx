import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

import Modal from "./index";

describe(Modal.name, () => {

    describe("on `What's the next?` button click", () => {
        beforeEach(() => {
            render(
                <Modal>
                    <div data-testid="content"/>
                </Modal>
            );
            fireEvent.click(screen.getByRole("button", {name: "What's the next?"}));
        });

        it("does not render a button with `What's the next?` label", () => {
            expect(
                screen.queryByRole("button", {name: "What's the next?"})
            ).not.toBeInTheDocument();
        });

        it("renders a specific element", () => {
            expect(screen.getByTestId("content")).toBeInTheDocument();
        });
    });

    describe("on `OK, je vais être patient...` button click", () => {
        beforeEach(() => {
            render(<Modal/>);
            fireEvent.click(screen.getByRole("button", {name: "What's the next?"}));
            fireEvent.click(
                screen.getByRole("button", {name: "OK, je vais être patient..."})
            );
        });

        it("does not render a button with `OK, je vais être patient...` label", () => {
            expect(
                screen.queryByRole("button", {name: "OK, je vais être patient..."})
            ).not.toBeInTheDocument();
        });
    });
});