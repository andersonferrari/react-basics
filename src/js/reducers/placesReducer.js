export default function reducer(state={
    geoInfo: {
      Canada: { Ontario: {}, BritshColumbia: {}, Quebec: {}},
      US: {Alabama:{}, Massachusetts: {}, NewYork: {}}
    },
    selectedCountry: "Canada", //defaults to
    selectedState: "Montreal", //defaults to
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_PLACES": {
        return {...state, fetching: true}
      }
      case "FETCH_PLACES_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_PLACES_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          user: action.payload,
        }
      }
      case "SET_COUNTRY": {
        console.log('111' + action.payload)
        return {
          ...state,
          selectedCountry: action.payload,
        }
      }
      case "SET_STATE": {
        return {
          ...state,
          selectedState: action.payload,
        }
      }
    }

    return state
}
