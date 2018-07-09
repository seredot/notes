import * as actions from "./index";

describe("actions", () => {

	it("addNote should create ADD_NOTE action", () => {
		expect(actions.addNote("0", "This is the first note.")).toEqual({
			type: "ADD_NOTE",
			id: "0",
			text: "This is the first note."
		});
	});

	it("editNote should create UPDATE_NOTE action", () => {
		expect(actions.updateNote("0", "This is a new text.")).toEqual({
			type: "UPDATE_NOTE",
			id: "0",
			text: "This is a new text."
		});
	});

	it("addNote should create DELETE_NOTE action", () => {
		expect(actions.deleteNote("0")).toEqual({
			type: "DELETE_NOTE",
			id: "0"
		});
	});

	it("editNote should create EDITING_NOTE_ID action", () => {
		expect(actions.editingNoteId("0")).toEqual({
			type: "EDITING_NOTE_ID",
			id: "0"
		});
	});

	it("addNote should create SET_FILTER action", () => {
		expect(actions.setFilter("ALL")).toEqual({
			type: "SET_FILTER",
			filter: "ALL"
		});
	});

	it("editNote should create TOGGLE_FAVORITE_NOTE action", () => {
		expect(actions.toggleFavoriteNote("0")).toEqual({
			type: "TOGGLE_FAVORITE_NOTE",
			id: "0"
		});
	});

});