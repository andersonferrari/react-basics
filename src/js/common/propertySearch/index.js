import React from 'react'
import { connect } from 'react-redux'

import { fetchPlaces } from '../../actions/placesActions'

@connect(( store ) => {
  console.log(store);
   return { 
     selectedCountry: store.places.selectedCountry
   }
})
export default class PropertySearch extends React.Component{
  componentWillMount() {
    this.props.dispatch(fetchPlaces())
  }
  render() {
    const { selectedCountry } = this.props;
    return (
      <div>
        <p> MAP GOES HERE: {selectedCountry} </p>
      </div>
    )
  }
}