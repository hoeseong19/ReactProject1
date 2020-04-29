import produce from "immer"

const initialState = {
	companies: [{"description":"AGILENT TECHNOLOGIES INC","displaySymbol":"A","symbol":"A"},{"description":"ALCOA CORP","displaySymbol":"AA","symbol":"AA"},{"description":"PERTH MINT PHYSICAL GOLD ETF","displaySymbol":"AAAU","symbol":"AAAU"},{"description":"ATA CREATIVITY GLOBAL - ADR","displaySymbol":"AACG","symbol":"AACG"},{"description":"ADVISORSHARES DORSEY WRIGHT","displaySymbol":"AADR","symbol":"AADR"},{"description":"AMERICAN AIRLINES GROUP INC","displaySymbol":"AAL","symbol":"AAL"},{"description":"ALTISOURCE ASSET MANAGEMENT","displaySymbol":"AAMC","symbol":"AAMC"},{"description":"ATLANTIC AMERICAN CORP","displaySymbol":"AAME","symbol":"AAME"},{"description":"AARON'S INC","displaySymbol":"AAN","symbol":"AAN"},{"description":"APPLIED OPTOELECTRONICS INC","displaySymbol":"AAOI","symbol":"AAOI"},{"description":"AAON INC","displaySymbol":"AAON","symbol":"AAON"},{"description":"ADVANCE AUTO PARTS INC","displaySymbol":"AAP","symbol":"AAP"},{"description":"APPLE INC","displaySymbol":"AAPL","symbol":"AAPL"},{"description":"AMERICAN ASSETS TRUST INC","displaySymbol":"AAT","symbol":"AAT"},{"description":"ALMADEN MINERALS LTD - B","displaySymbol":"AAU","symbol":"AAU"},{"description":"ATLAS AIR WORLDWIDE HOLDINGS","displaySymbol":"AAWW","symbol":"AAWW"},{"description":"ISHARES MSCI ALL COUNTRY ASI","displaySymbol":"AAXJ","symbol":"AAXJ"},{"description":"AXON ENTERPRISE INC","displaySymbol":"AAXN","symbol":"AAXN"},{"description":"ALLIANCEBERNSTEIN HOLDING LP","displaySymbol":"AB","symbol":"AB"},{"description":"ABB LTD-SPON ADR","displaySymbol":"ABB","symbol":"ABB"},{"description":"ABBVIE INC","displaySymbol":"ABBV","symbol":"ABBV"},{"description":"AMERISOURCEBERGEN CORP","displaySymbol":"ABC","symbol":"ABC"},{"description":"AMERIS BANCORP","displaySymbol":"ABCB","symbol":"ABCB"},{"description":"ABEONA THERAPEUTICS INC","displaySymbol":"ABEO","symbol":"ABEO"},{"description":"ABSOLUTE CORE STRATEGY ETF","displaySymbol":"ABEQ","symbol":"ABEQ"},{"description":"AMBEV SA-ADR","displaySymbol":"ABEV","symbol":"ABEV"},{"description":"ASBURY AUTOMOTIVE GROUP","displaySymbol":"ABG","symbol":"ABG"},{"description":"ARCA BIOPHARMA INC","displaySymbol":"ABIO","symbol":"ABIO"},{"description":"ABM INDUSTRIES INC","displaySymbol":"ABM","symbol":"ABM"},{"description":"ABIOMED INC","displaySymbol":"ABMD","symbol":"ABMD"},{"description":"ARBOR REALTY TRUST INC","displaySymbol":"ABR","symbol":"ABR"},{"description":"","displaySymbol":"ABR-A","symbol":"ABR-A"},{"description":"","displaySymbol":"ABR-B","symbol":"ABR-B"},{"description":"","displaySymbol":"ABR-C","symbol":"ABR-C"},{"description":"ABBOTT LABORATORIES","displaySymbol":"ABT","symbol":"ABT"},{"description":"ALLEGIANCE BANCSHARES INC","displaySymbol":"ABTX","symbol":"ABTX"},{"description":"ARBUTUS BIOPHARMA CORP","displaySymbol":"ABUS","symbol":"ABUS"},{"description":"ASSOCIATED CAPITAL GROUP - A","displaySymbol":"AC","symbol":"AC"},{"description":"ARCOSA INC","displaySymbol":"ACA","symbol":"ACA"},{"description":"ACADIA PHARMACEUTICALS INC","displaySymbol":"ACAD","symbol":"ACAD"},{"description":"ACAMAR PARTNERS ACQUISITI- A","displaySymbol":"ACAM","symbol":"ACAM"},{"description":"ACAMAR PARTNERS ACQUISITION","displaySymbol":"ACAMU","symbol":"ACAMU"},{"description":"","displaySymbol":"ACAMW","symbol":"ACAMW"},{"description":"AURORA CANNABIS INC","displaySymbol":"ACB","symbol":"ACB"},{"description":"ATLANTIC CAPITAL BANCSHARES","displaySymbol":"ACBI","symbol":"ACBI"},{"description":"AMERICAN CAMPUS COMMUNITIES","displaySymbol":"ACC","symbol":"ACC"},{"description":"ACCO BRANDS CORP","displaySymbol":"ACCO","symbol":"ACCO"},{"description":"ACCEL ENTERTAINMENT INC","displaySymbol":"ACEL","symbol":"ACEL"},{"description":"","displaySymbol":"ACEL+","symbol":"ACEL+"},{"description":"ACER THERAPEUTICS INC","displaySymbol":"ACER","symbol":"ACER"},{"description":"ALPS CLEAN ENERGY ETF","displaySymbol":"ACES","symbol":"ACES"},{"description":"ARCH CAPITAL GROUP LTD","displaySymbol":"ACGL","symbol":"ACGL"},{"description":"","displaySymbol":"ACGLO","symbol":"ACGLO"},{"description":"","displaySymbol":"ACGLP","symbol":"ACGLP"},{"description":"ALUMINUM CORP OF CHINA-ADR","displaySymbol":"ACH","symbol":"ACH"},{"description":"ACADIA HEALTHCARE CO INC","displaySymbol":"ACHC","symbol":"ACHC"},{"description":"ACHIEVE LIFE SCIENCES INC","displaySymbol":"ACHV","symbol":"ACHV"},{"description":"ACACIA COMMUNICATIONS INC","displaySymbol":"ACIA","symbol":"ACIA"},{"description":"APTUS COLLARED INC OPP ETF","displaySymbol":"ACIO","symbol":"ACIO"},{"description":"AC IMMUNE SA","displaySymbol":"ACIU","symbol":"ACIU"},{"description":"ACI WORLDWIDE INC","displaySymbol":"ACIW","symbol":"ACIW"},{"description":"AXCELIS TECHNOLOGIES INC","displaySymbol":"ACLS","symbol":"ACLS"},{"description":"AECOM","displaySymbol":"ACM","symbol":"ACM"},{"description":"ACM RESEARCH INC-CLASS A","displaySymbol":"ACMR","symbol":"ACMR"},{"description":"ACCENTURE PLC-CL A","displaySymbol":"ACN","symbol":"ACN"},{"description":"ACNB CORP","displaySymbol":"ACNB","symbol":"ACNB"},{"description":"ACORDA THERAPEUTICS INC","displaySymbol":"ACOR","symbol":"ACOR"},{"description":"ABERDEEN INCOME CREDIT STRAT","displaySymbol":"ACP","symbol":"ACP"},{"description":"ARES COMMERCIAL REAL ESTATE","displaySymbol":"ACRE","symbol":"ACRE"},{"description":"ACLARIS THERAPEUTICS INC","displaySymbol":"ACRS","symbol":"ACRS"}], 
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