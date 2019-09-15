import React from "react";
import Landing from "../components/landing";

/**
 * Instance from Header to be tested
 * @type {Header}
 */
const component = new Landing();
it("renders without crashing", () => {
    expect(component.render()).toBeTruthy()
});
