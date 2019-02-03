import React, { Component } from 'react'
import MapContaine from './MapComponent'
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

    render() {
        return (
            <div className="mapPage">
                <aside>
                    <h2>Start travel!</h2>
                    <form>
                        <button
                            className={this.state.activeButton === "Create Marker" ? 'active' : ''}
                            onClick={this.setButtonActive}
                            value="Create Marker"
                            >Create Marker
                        </button>
                        <button
                            className="deleteLastPosition"
                            onClick={this.deleteMarker}
                            value="Delete Positions"
                            >Delete marker
                        </button>
                        <button
                            className="removal"
                            onClick={this.deleteAllMarkers}
                            value="Delete last Position"
                            >Delete all markers
                        </button>
                    </form>
                    <form>
                        <button
                            className={this.state.activeButton === "Create Polyline" ? 'active' : ''}
                            onClick={this.setButtonActive}
                            value="Create Polyline"
                            >Create path
                        </button>
                        <button
                            className="deleteLastPosition"
                            onClick={this.deleteLastPolylineCoord}
                            value="Delete last Position"
                            >Change path
                        </button>
                        <button
                            className="removal"
                            onClick={this.deletePath}
                            value="Delete Positions"
                            >Delete path
                        </button>
                    </form>
                    <form>
                        <button
                            className={this.state.activeButton === "Create Polygon" ? 'active' : ''}
                            onClick={this.setButtonActive}
                            value="Create Polygon"
                            >Highlight area
                        </button>
                        <button
                            className="deleteLastPosition"
                            onClick={this.deleteLastPosition}
                            value="Delete last Position"
                            >Delete last position
                        </button>
                        <button
                            className="removal"
                            onClick={this.deleteArea}
                            value="Delete Positions"
                            >Delete area
                        </button>
                    </form>
                </aside>
                <div className="mapWrapper">
                    <MapContaine
                        ref={this.child}
                        center = {{lat: 48.6216429, lng: 22.2974461}}
                        activeButton={this.state.activeButton}
                        />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps)(MapContainer)
