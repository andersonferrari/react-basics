import React from "react"
import PropertySearch from "../../actions/placesActions"

export default class Country extends React.Component {
  render() {
    return (
      <div>
        <h1>Country Page!</h1>
        <PropertySearch />
      </div>
    );
  }
}