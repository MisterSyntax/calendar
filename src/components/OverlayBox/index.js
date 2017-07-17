import React from 'react'
import './OverlayBox.css'

const OverlayBox = (props) => {

    return (
        <div className={props.open ? "overlay-container open" : "overlay-container closed"}>



            <div className="overlay-box-container">
                <div className="overlay-box">
                    {props.children}
                </div>
                <div className="overlay-bg" onClick={props.closeOverlay}>
                </div>
            </div>


        </div>
    )

}

export default OverlayBox