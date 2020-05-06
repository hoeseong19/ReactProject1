import produce from "immer"

const initialState = {
	companies: [],
	selected: undefined
};

const reducer = produce((state = initialState, action) => {
	switch(action.type) {
		case "LOAD_COMPANIES":
			state.companies = action.payload;
			break;
		case "COMPANY_SELECT":
			state.selected = action.payload
			break;
		default:
			state.selected = state.companies[0];
			return state
	}
});

export default reducer;