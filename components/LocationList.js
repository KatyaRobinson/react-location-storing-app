var React = require('react');
var LocationItem = require('./LocationItem');

var LocationList = React.createClass({

	render(){
		var self = this;
		var locations = this.props.locations.map(function(1){
			var active = self.props.activeLocationAddress == 1.address;

			//Notice that we are passing the onClicj callback of this
			//LocationList to each LocatioItem

			return <LocationItem address={1.address} timestamp={1.timestamp}
				active={active} onClick={self.props.onClick} />
		});

		if(!locations.length){
			return null;
		}

		return(
			<div className="list-group col-xs-12 col-md-6 col-md-offset-3">
				<span className="list-group-item active">Saved Locations </span>
				{locations}
			</div>
		)
	}
});

module.exports = LocationList;