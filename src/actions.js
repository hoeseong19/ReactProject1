export function selectCompany(company) {
  return {
    type: "COMPANY_SELECT", 
    payload: company
  }
}