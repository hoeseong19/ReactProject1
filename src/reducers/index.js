import produce from "immer"

const initialState = {
	companies: {},
	selected: {news: undefined, quote: undefined, candles: [], profile: undefined}
};

const reducer = produce((state, action) => {
	switch(action.type) {
		case "LOAD_COMPANIES":
			action.payload.forEach(company => {
				if(company.description) {
					state.companies[company.symbol] = company
				}
			});
			break;
		case "LOAD_QUOTE":
			state.selected.quote = action.payload;
			break;
		case "LOAD_NEWS":
			state.selected.news = action.payload;
			break;
		case "LOAD_CANDLES":
			const zip= rows=>rows[0].map((_,c)=>rows.map(row=>row[c]))
			// https://stackoverflow.com/questions/4856717/javascript-equivalent-of-pythons-zip-function
			// Open, High, Low, Close
			const {o, h, l, c} = action.payload;
			const prices = zip([o, h, l, c]);

			action.payload.t.map((item, idx) => {
				// x: new Date(1538778600000),
				// y: [6629.81, 6650.5, 6623.04, 6633.33]
				state.selected.candles.push({
					x: new Date(item), 
					y: prices[idx]
				})
			})
			break;
		case "LOAD_PROFILE":
			state.selected.profile = action.payload;
			break;
		default:
			break;
	}
}, initialState);

export default reducer;