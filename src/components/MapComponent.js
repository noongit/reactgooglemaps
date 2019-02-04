import React, { Component } from 'react'
import {
    withGoogleMap,
    GoogleMap,
    Marker,
    Polygon,
    Polyline
} from "react-google-maps"

class MapContaine extends Component {
    constructor() {
    super();
    this.state = {
            position: [],
            polygonShown:[],
            polygon:[],
            polyline:[],
            markers:[],
            InitialMap: withGoogleMap(props => {
                return (
                    <GoogleMap
                        defaultZoom={14}
                        defaultCenter={{lat: 48.6216429, lng: 22.2974461}}
                        onClick={(e) => this.OnMapClick(e)}
                        >
                        {this.state.markers.map((marker, index) =>(
                            <Marker position={marker} key={index} />
                        ))}
                        {this.state.polyline.map((coords, index) =>(
                            <Marker position={coords} key={index} />
                        ))}
                        <Polygon
                            path={this.state.polygonShown}
                            options={{
                                fillColor: "#000",
                                fillOpacity: 0.4,
                                strokeColor: "#000",
                                strokeOpacity: 1,
                                strokeWeight: 1
                            }} />
                            <Polyline
                                defaultPosition={this.props.center}
                                path= {this.state.polyline}
                                geodesic= {true}
                                strokeColor='#fff'
                                strokeOpacity= {1.0}
                                strokeWeight= {2}
                                />
                        </GoogleMap>
                    )
                })
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

        createMarkers(e) {
            let latLng = {lat: e.latLng.lat(), lng: e.latLng.lng()};
            this.setState({
                markers:[...this.state.markers, latLng]
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
            let latLng = {lat: e.latLng.lat(), lng: e.latLng.lng()};
            this.setState({
                polyline:[...this.state.polyline, latLng]
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
            let latLng = {lat: e.latLng.lat(), lng: e.latLng.lng()};
            this.setState({
                polygon:[...this.state.polygon, latLng]
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

        render() {
            return(
                <this.state.InitialMap
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
