import React, {ReactElement} from "react";
import KnobComponent from "../components/knob";
import Canvas from '../components/canvas'


const Doodle = (): ReactElement => {

    const buttonsLR = () => {
        return (
            <React.Fragment>
                <KnobComponent label={"LR"}></KnobComponent>
            </React.Fragment>
        )
    }

    const buttonsUD = () => {
        return (
            <React.Fragment>
                <KnobComponent label={"UD"}></KnobComponent>
            </React.Fragment>
        )
    }

    const canvas = () => {
        return (
            <React.Fragment>
                <Canvas />
            </React.Fragment>
        )
    }


    return (
        <div>
            {buttonsLR()}
            {buttonsUD()}
            {canvas()}
        </div>
    )
}


export default Doodle;
