import "react-native";
import React from "react";
import NoteList from "./noteList";

import renderer from "react-test-renderer";

describe("Testing NoteList component", () => {
	it("renders correctly", () => {
		const tree = renderer.create(<NoteList />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
