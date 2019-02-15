import React, { Component } from 'react'
import {
    withGoogleMap,
    GoogleMap,
    Marker,
    Polygon,
    Polyline
} from "react-google-maps"

const InitialMap = withGoogleMap(props => {
    return (
        <GoogleMap
            defaultZoom={14}
            defaultCenter={{lat: 48.6216429, lng: 22.2974461}}
            onClick={(e) => props.OnMapClick(e)}
            >
            {props.positions.markers.map((marker, index) =>(
                <Marker position={marker} key={index} />
            ))}
            {props.positions.polyline.map((coords, index) =>(
                <Marker position={coords} key={index} />
            ))}
            <Polygon
                path={props.positions.polygonShown}
                options={{
                    fillColor: "#000",
                    fillOpacity: 0.4,
                    strokeColor: "#000",
                    strokeOpacity: 1,
                    strokeWeight: 1
                }} />
                <Polyline
                    defaultPosition={props.center}
                    path= {props.positions.polyline}
                    geodesic= {true}
                    strokeColor='#fff'
                    strokeOpacity= {1.0}
                    strokeWeight= {2}
                    />
            </GoogleMap>
        )
    })

    class MapContaine extends Component {
        constructor() {
            super();
            this.state = {
                polygonShown:[],
                polygon:[],
                polyline:[],
                markers:[]
            }
        }

        OnMapClick = (e) => {
            switch (this.props.activeButton) {
                case "Create Marker":
                this.createMarkers(e);
                break;
                case "Create Polyline":
                this.createPolyline(e);
                break;
                case "Create Polygon":
                this.createPolygon(e);
                break;
            }
        }

        savePath(saveName){
            this.props.saveCurrentState(this.state,saveName)
        }

        createMarkers(e) {
            this.setState({
                markers:[...this.state.markers, {lat: e.latLng.lat(), lng: e.latLng.lng()}]
            })
        }

        deleteMarker() {
            let markers = this.state.markers;
            markers.pop();
            this.setState({
                markers
            })
        }

        deleteAllMarkers(){
            this.setState({
                markers:[]
            })
        }

        createPolyline(e) {
            this.setState({
                polyline:[...this.state.polyline, {lat: e.latLng.lat(), lng: e.latLng.lng()}]
            })
        }

        deleteLastPolylineCoord(){
            let polyline = this.state.polyline;
            polyline.pop();
            this.setState({
                polyline
            })
            this.polylineRefresh();
        }

        polylineRefresh(){
            this.setState({
                polyline:[...this.state.polyline]
            })
        }

        deletePath() {
            this.setState({
                polyline:[]
            })
        }

        createPolygon(e){
            this.setState({
                polygon:[...this.state.polygon, {lat: e.latLng.lat(), lng: e.latLng.lng()}]
            },() =>{
                this.setState({
                    polygonShown:[...this.state.polygon, this.state.polygon[0]]
                })
            })
        }

        deleteLastPosition(){
            let polygonShown = this.state.polygon;
            polygonShown.pop();
            this.setState({
                polygonShown:[...polygonShown, this.state.polygonShown[0]]
            })
        }

        deleteArea(){
            this.setState({
                polygonShown: [],
                polygon:[]
            })
        }

        loadPath = (coords) => {
            let markers = this.getMarkers(coords.markers.arrayValue.values),
            polyline = this.getPolyline(coords.polyline.arrayValue.values),
            polygonShown = this.getPolygonShown(coords.polygonShown.arrayValue.values),
            polygon = this.getPolygon(coords.polygon.arrayValue.values)
            // console.log(coords.markers.arrayValue.values[0].mapValue.fields.lat.doubleValue)
            this.setState({
                polygonShown,
                polygon,
                polyline,
                markers
            })
        }

        getPolygon(coords) {
            let polyline = [];
            if(coords){
                coords.map(coord => {
                    polyline = [
                        ...polyline,
                        {lat: coord.mapValue.fields.lat.doubleValue, lng:coord.mapValue.fields.lng.doubleValue}
                    ]
                })
            }
            return polyline
        }

        getPolygonShown(coords) {
            let polygonShown = [];
            if(coords){
                coords.map(coord => {
                    polygonShown = [
                        ...polygonShown,
                        {lat: coord.mapValue.fields.lat.doubleValue, lng:coord.mapValue.fields.lng.doubleValue}
                    ]
                })
            }
            return polygonShown
        }

        getPolyline(coords) {
            let polyline = [];
            if(coords){
                coords.map(coord => {
                    polyline = [
                        ...polyline,
                        {lat: coord.mapValue.fields.lat.doubleValue, lng:coord.mapValue.fields.lng.doubleValue}
                    ]
                })
            }
            return polyline
        }

        getPolyline(coords) {
            let polyline = [];
            if(coords){
                coords.map(coord => {
                    polyline = [
                        ...polyline,
                        {lat: coord.mapValue.fields.lat.doubleValue, lng:coord.mapValue.fields.lng.doubleValue}
                    ]
                })
            }
            return polyline
        }

        getMarkers(coords) {
            let markers = [];
            if(coords){
                coords.map(coord => {
                    markers = [
                        ...markers,
                        {lat: coord.mapValue.fields.lat.doubleValue, lng:coord.mapValue.fields.lng.doubleValue}
                    ]
                })
            }
            return markers
        }

        render() {
            return(
                <InitialMap
                    positions={this.state}
                    OnMapClick={this.OnMapClick}
                    deleteMarkers={this.state.position}
                    containerElement={
                        <div style={{ height: `100%` }} />
                    }
                    mapElement={
                        <div style={{ height: `100%` }} />
                    }
                    />
            )
        }
    }

    export default MapContaine
