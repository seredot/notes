import notes from "./notes";

describe("notes reducer", () => {
	it("should return initial state as empty array", () => {
		expect(notes(undefined, {})).toEqual([]);
	});

	it("should add a note", () => {
		expect(
			notes([], {
				type: "ADD_NOTE",
				id: "0",
				text: "This is a note text."
			})
		).toEqual([
			{
				id: "0",
				favorite: false,
				text: "This is a note text."
			}
		]);
	});

	it("should update a note", () => {
		expect(
			notes(
				[
					{
						id: "0",
						favorite: false,
						text: "This is a note text."
					}
				],
				{
					type: "UPDATE_NOTE",
					id: "0",
					text: "This is updated text."
				}
			)
		).toEqual([
			{
				id: "0",
				favorite: false,
				text: "This is updated text."
			}
		]);
	});

	it("should delete a note", () => {
		expect(
			notes(
				[
					{
						id: "0",
						favorite: false,
						text: "This is a note text."
					}
				],
				{
					type: "DELETE_NOTE",
					id: "0"
				}
			)
		).toEqual([]);
	});

	it("should toggle favorite property of a note", () => {
		expect(
			notes(
				[
					{
						id: "0",
						favorite: false,
						text: "This is a note text."
					}
				],
				{
					type: "TOGGLE_FAVORITE_NOTE",
					id: "0"
				}
			)
		).toEqual([
			{
				id: "0",
				favorite: true,
				text: "This is a note text."
			}
		]);
	});
});
