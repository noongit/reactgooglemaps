import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInitData } from '../actions/getInitData'
import { deleteRecord } from '../actions/deleteRecord'

class Aside extends Component{
    constructor(props){
        super(props)
        this.saveName = React.createRef();
    }

    componentDidMount() {
        this.props.getInitData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.map.pathNames !== this.props.map.pathNames) {
            this.props.getInitData();
        }
    }

    choosePath = (e,index) => {
        e.preventDefault();
        this.props.setActivePath(index)
    }

    delete = (e) =>{
        e.preventDefault();
        this.props.deleteRecord(this.props.map.pathNames[this.props.map.activePath])
    }

    render() {
        return (
            <aside>
                <h2>Start travel</h2>
                <form>
                    <button
                        className={this.props.activeButton === "Create Marker" ? 'active' : ''}
                        onClick={(e) => this.props.setButtonActive(e)}
                        value="Create Marker"
                        >Create Marker
                    </button>
                    <button
                        className="deleteLastPosition"
                        onClick={(e) => this.props.deleteMarker(e)}
                        value="Delete Positions"
                        >Delete marker
                    </button>
                    <button
                        className="removal"
                        onClick={(e) => this.props.deleteAllMarkers(e)}
                        value="Delete last Position"
                        >Delete all markers
                    </button>
                </form>
                <form>
                    <button
                        className={this.props.activeButton === "Create Polyline" ? 'active' : ''}
                        onClick={(e) => this.props.setButtonActive(e)}
                        value="Create Polyline"
                        >Create path
                    </button>
                    <button
                        className="deleteLastPosition"
                        onClick={(e) => this.props.deleteLastPolylineCoord(e)}
                        value="Delete last Position"
                        >Change path
                    </button>
                    <button
                        className="removal"
                        onClick={(e) => this.props.deletePath(e)}
                        value="Delete Positions"
                        >Delete path
                    </button>
                </form>
                <form>
                    <button
                        className={this.props.activeButton === "Create Polygon" ? 'active' : ''}
                        onClick={(e) => this.props.setButtonActive(e)}
                        value="Create Polygon"
                        >Highlight area
                    </button>
                    <button
                        className="deleteLastPosition"
                        onClick={(e) => this.props.deleteLastPosition(e)}
                        value="Delete last Position"
                        >Delete last position
                    </button>
                    <button
                        className="removal"
                        onClick={(e) => this.props.deleteArea(e)}
                        value="Delete Positions"
                        >Delete area
                    </button>
                </form>
                <form className="pathForm">
                    <button
                        id = "save"
                        onClick={(e) => this.props.savePath(e, this.saveName)}
                        >Save Path
                    </button>
                    <input ref={this.saveName}></input>
                    <ul>
                        {this.props.map.pathNames ? this.props.map.pathNames.map((name, index) =>(
                            <li
                                onClick={(e) => this.choosePath(e,index)}
                                id={this.props.map.activePath === index ? 'choosenPath' : ''}
                                key={index}>
                                {name}
                            </li>
                        )) : null}
                    </ul>
                    <button
                        className="deleteLastPosition"
                        onClick={(e) => this.props.loadPath(e)}
                        value="Delete last Position"
                        >Load path
                    </button>
                    <button
                        className="removal"
                        onClick={(e) => this.delete(e)}
                        value="Delete Positions"
                        >Delete
                    </button>
                </form>
            </aside>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActivePath: (name) => dispatch({type: 'ACTIVE_PATH', name: name }),
        getInitData: () => dispatch(getInitData()),
        deleteRecord: (path) => dispatch(deleteRecord(path))
    }
}

const mapStateToProps = (state) => {
    return {
        map: state.map,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Aside);
