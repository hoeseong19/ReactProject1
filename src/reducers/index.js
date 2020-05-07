import produce from "immer"

const initialState = {
	companies: {},
	selected: {news: undefined, quote: undefined, candles: undefined}
};

const reducer = produce((state, action) => {
	switch(action.type) {
		case "LOAD_COMPANIES":
			action.payload.forEach(company => {
				state.companies[company.symbol] = company
			});
			break;
		case "LOAD_QUOTE":
			state.selected.quote = action.payload;
			break;
		case "LOAD_NEWS":
			state.selected.news = action.payload;
			break;
		case "LOAD_CANDLES":
			state.selected.candles = action.payload;
			break;
		default:
			break;
	}
}, initialState);

export default reducer;