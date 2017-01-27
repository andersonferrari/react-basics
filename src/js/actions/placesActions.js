export function fetchPlaces() {
  return {
    type: "FETCH_PLACES_FULFILLED",
    payload: {}
  }
}

export function setCountry(name) {
  return {
    type: 'SET_COUNTRY',
    payload: name,
  }
}

export function setState(name) {
  return {
    type: 'SET_STATE',
    payload: name,
  }
}
