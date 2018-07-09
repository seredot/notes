import "react-native";
import React from "react";
import NoteItem from "./noteItem";

import renderer from "react-test-renderer";

describe("Testing NoteItem component", () => {
	it("renders correctly", () => {
		const tree = renderer.create(<NoteItem />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
