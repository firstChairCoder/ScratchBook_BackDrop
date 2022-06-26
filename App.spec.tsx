import React from "react";
import { render } from "@testing-library/react-native";
import App from "./App";

describe("Hello", () => {
	it("should render the correct message", () => {
		const { queryByText } = render(<App />);
		expect(queryByText("A second chance at a first impression!")).not.toBeNull();
	});
});
