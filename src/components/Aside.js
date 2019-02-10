import React from 'react';

const Aside = (props) => {
    return (
            <aside>
            <h2>Start travel</h2>
                <form>
                    <button
                        className={props.activeButton === "Create Marker" ? 'active' : ''}
                        onClick={(e) => props.setButtonActive(e)}
                        value="Create Marker"
                        >Create Marker
                    </button>
                    <button
                        className="deleteLastPosition"
                        onClick={(e) => props.deleteMarker(e)}
                        value="Delete Positions"
                        >Delete marker
                    </button>
                    <button
                        className="removal"
                        onClick={(e) => props.deleteAllMarkers(e)}
                        value="Delete last Position"
                        >Delete all markers
                    </button>
                </form>
                <form>
                    <button
                        className={props.activeButton === "Create Polyline" ? 'active' : ''}
                        onClick={(e) => props.setButtonActive(e)}
                        value="Create Polyline"
                        >Create path
                    </button>
                    <button
                        className="deleteLastPosition"
                        onClick={(e) => props.deleteLastPolylineCoord(e)}
                        value="Delete last Position"
                        >Change path
                    </button>
                    <button
                        className="removal"
                        onClick={(e) => props.deletePath(e)}
                        value="Delete Positions"
                        >Delete path
                    </button>
                </form>
                <form>
                    <button
                        className={props.activeButton === "Create Polygon" ? 'active' : ''}
                        onClick={(e) => props.setButtonActive(e)}
                        value="Create Polygon"
                        >Highlight area
                    </button>
                    <button
                        className="deleteLastPosition"
                        onClick={(e) => props.deleteLastPosition(e)}
                        value="Delete last Position"
                        >Delete last position
                    </button>
                    <button
                        className="removal"
                        onClick={(e) => props.deleteArea(e)}
                        value="Delete Positions"
                        >Delete area
                    </button>
                </form>
                <form className="pathForm">
                    <button
                        className={props.activeButton === "Create Polygon" ? 'active' : ''}
                        id = "save"
                        onClick={(e) => props.setButtonActive(e)}
                        value="Create Polygon"
                        >Save Path
                    </button>
                    <input></input>
                    <ul>
                        <li>path</li>
                        <li>path</li>
                        <li>path</li>
                        <li>super mega insane ultra that cant be placed inside 0ne stroke path</li>
                        <li>path</li>
                        <li>path</li>
                        <li>path</li>
                        <li>path</li>
                        <li>path</li>
                        <li>super mega insane ultra that cant be placed inside 0ne stroke path</li>
                        <li>path</li>
                        <li>path</li>
                    </ul>
                    <button
                        className="deleteLastPosition"
                        onClick={(e) => props.deleteLastPosition(e)}
                        value="Delete last Position"
                        >Load path
                    </button>
                    <button
                        className="removal"
                        onClick={(e) => props.deleteArea(e)}
                        value="Delete Positions"
                        >Delete path
                    </button>
                </form>
            </aside>
    )
}

export default Aside;
