import React, { Component } from 'react';
import Aside from './Aside';
import { connect } from 'react-redux';
import { firestoreActions } from '../actions/firestoreActions'
import MapContaine from './MapComponent';

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

    savePath = (e, saveName) => {
        e.preventDefault();
        let mapState = this.child.current.getMapState(),
        scope = this;
        if(saveName.current.value){
            this.props.firestoreActions(mapState, scope, saveName.current.value)
        } else {
            alert ('Enter path name')
        }
    }

    loadPath = (e) => {
        e.preventDefault();
        if(this.props.map.pathNames[this.props.map.activePath]){
            this.child.current.loadPath(this.props.map.coords[this.props.map.activePath])
        } else {
            alert('Choose what you want to load')
        }
    }

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
            savePath = {this.savePath}
            loadPath = {this.loadPath}
        /> : this.props.history.push('/');
        return (
            <div className="mapPage">
                {aside}
                <div className="mapWrapper">
                        <MapContaine
                            ref={this.child}
                            activeButton={this.state.activeButton}
                            saveCurrentState={this.saveCurrentState}
                        />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        firestoreActions: (data, scope, saveName) => dispatch(firestoreActions(data, scope, saveName))
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        map: state.map
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer)
