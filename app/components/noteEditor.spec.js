import "react-native";
import React from "react";
import NoteEditor from "./noteEditor";

import renderer from "react-test-renderer";

describe("Testing NoteEditor component", () => {
	it("renders correctly", () => {
		const tree = renderer.create(<NoteEditor />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
