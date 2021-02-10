import React, {ReactElement, useState} from "react";
import KnobLRComponent from "../components/knobLR";
import Canvas from '../components/canvas'
import KnobUDComponent from "../components/knobUD";


const Doodle = (): ReactElement => {
    const [position, setPosition] = React.useState({x:180, y: 180});
    const [colorLine, setColorLine] = useState('black');
    const [colorBackground, setColorBackground] = useState('white');
    const handleTransferY = (value: number) => {
        console.log("y",value)
        setPosition({x:position.x, y:position.y + value});
    }

    const handleTransferX = (value: number) => {
        setPosition({x:position.x + value, y:position.y});
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
                <Canvas colorLine={colorLine} colorBackground={colorBackground} position={position}/>
            </React.Fragment>
        )
    }


    return (
        <div>
            {buttonsLR()}
            {buttonsUD()}
            {canvas()}
            <input type="color"  value={colorLine} onChange={e => setColorLine(e.target.value)} />
            <input type="color" value={colorBackground} onChange={e => setColorBackground(e.target.value)} />
        </div>
    )
}


export default Doodle;
