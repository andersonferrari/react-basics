import React from 'react'
import { connect } from 'react-redux'

import { fetchPlaces, setCountry } from '../../actions/placesActions'

@connect(( store ) => {
   return { 
     selectedCountry: store.places.selectedCountry
   }
})
export default class PropertySearch extends React.Component{
  constructor(props) {
    super(props);
    
    this.setCountryName = this.setCountryName.bind(this);
  }
  componentWillMount() {
    this.props.dispatch(fetchPlaces())
  }
  setCountryName(name) {
    this.props.dispatch(setCountry(name));
  }
  render() {
    const { selectedCountry } = this.props;
    return (
      <div>
        <p> MAP GOES HERE: {selectedCountry} </p>
        <button onClick={() => this.setCountryName('EU')}>Set Country to EU </button>
      </div>
    )
  }
}