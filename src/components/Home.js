import React, { Component } from 'react';
import MapContaine from './MapComponent';
import Aside from './Aside';
import { connect } from 'react-redux';
class MapContainer extends Component {
    constructor(props){
        super(props)
        this.child = React.createRef();
        this.state = {
            activeButton:''
        }
    }
    setButtonActive = (e) => {
        e.preventDefault();
        this.setState({
            activeButton: e.target.value
        })
    }

    deleteMarker = (e) => {
        e.preventDefault();
        this.child.current.deleteMarker();
    }

    deleteLastPolylineCoord = (e) => {
        e.preventDefault();
        this.child.current.deleteLastPolylineCoord();
    }

    deleteLastPosition = (e) => {
        e.preventDefault();
        this.child.current.deleteLastPosition();
    }

    deleteArea = (e) => {
        e.preventDefault();
        this.child.current.deleteArea();
    }

    deleteAllMarkers = (e) => {
        e.preventDefault();
        this.child.current.deleteAllMarkers();
    }

    deletePath = (e) => {
        e.preventDefault();
        this.child.current.deletePath();
    }
// this.props.history.push('/')
    render() {
        const aside = document.cookie ? <Aside
            activeButton={this.state.activeButton}
            setButtonActive={this.setButtonActive}
            deleteMarker={this.deleteMarker}
            deleteLastPolylineCoord={this.deleteLastPolylineCoord}
            deleteLastPosition={this.deleteLastPosition}
            deleteArea={this.deleteArea}
            deleteAllMarkers={this.deleteAllMarkers}
            deletePath={this.deletePath}
        /> : <Aside
            activeButton={this.state.activeButton}
            setButtonActive={this.setButtonActive}
            deleteMarker={this.deleteMarker}
            deleteLastPolylineCoord={this.deleteLastPolylineCoord}
            deleteLastPosition={this.deleteLastPosition}
            deleteArea={this.deleteArea}
            deleteAllMarkers={this.deleteAllMarkers}
            deletePath={this.deletePath}
        />;
        return (
            <div className="mapPage">
                {aside}
                <div className="mapWrapper">
                        <MapContaine
                            ref={this.child}
                            activeButton={this.state.activeButton}
                        />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        map: state.map
    }
}
export default connect(mapStateToProps)(MapContainer)
