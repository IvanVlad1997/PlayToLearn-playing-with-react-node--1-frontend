import React, {ReactElement, useEffect, useState} from "react";
import KnobLRComponent from "../components/knobLR";

import KnobUDComponent from "../components/knobUD";
import CanvasComponent from "../components/canvas";

const Doodle = (props:any): ReactElement => {
    const [position, setPosition] = React.useState({x:180, y: 180});
    const [colorLine, setColorLine] = useState('black');
    const [colorBackground, setColorBackground] = useState('white');

    const handleTransferY = (value: number) => {
        console.log("y",value)
        if (position.y <0) {
            setPosition({x: position.x, y: 0});
        } else if (position.y> 360) {
            setPosition({x: position.x, y: 360});
        } else {
            setPosition({x: position.x, y: position.y + value});
        }
    }

    const handleTransferX = (value: number) => {
        if (position.x <0) {
            setPosition({x: 0, y:position.y});
        } else if (position.x > 360) {
            setPosition({x: 360, y:position.y});
        } else {
            setPosition({x: position.x + value, y: position.y});
        }
    }

    const buttonsLR = () => {
        return (
            <React.Fragment>
                <KnobLRComponent label={"LR"} sendValueFromChildToParent={handleTransferX}></KnobLRComponent>
            </React.Fragment>
        )
    }

    const buttonsUD = () => {
        return (
            <React.Fragment>
                <KnobUDComponent label={"UD"} sendValueFromChildToParent={handleTransferY}></KnobUDComponent>
            </React.Fragment>
        )
    }

    const canvas = () => {
        return (
            <React.Fragment>
                <CanvasComponent colorLine={colorLine} colorBackground={colorBackground} position={position}
                                    name={props.match.params.name}></CanvasComponent>
            </React.Fragment>
        )
    }


    return (
            <div className="container mt-2">
                <div className="row ">
                    <div className="col-sm text-center ">
                        {buttonsLR()}
                    </div>
                    <div className="col-sm">
                    </div>
                    <div className="col-sm">
                        {buttonsUD()}
                    </div>
                </div>
                <div className="row  justify-content-center">
                    <div col-12-sm>
                        {canvas()}

                    </div>
                </div>
                <div className="row  justify-content-center">
                    <div col-12-sm>
                        <label>Schimbă culoarea liniei</label>
                        <input  type="color"  value={colorLine} onChange={e => setColorLine(e.target.value)} />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <label>Schimbă culoarea fundalului</label>
                    <input  type="color" value={colorBackground} onChange={e => setColorBackground(e.target.value)} />
                </div>
            </div>




    )
}


export default Doodle;
