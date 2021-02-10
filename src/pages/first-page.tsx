import React, {ReactElement, useEffect, useState} from "react";
import {NameInputComponent} from "../components/name-input";
import {getAllCanvas, removeCanvas} from "../functions/interviu";
import {Link} from "react-router-dom";

const FirstPageComponent = (): ReactElement => {
    const [canvas, setCanvas] = useState([])
    useEffect(
        () => {
            fetchCanvas()
        }, []
    )
    const fetchCanvas = () => {
        getAllCanvas().then((c: any) => {
            console.log(c.data)
            setCanvas(c.data)
        })
    }
    function list() {
        const listItems = canvas.map((c: any, index:number) =>
            <div key={index}>
                <li ><Link to={`/canvas/${c.name}`}>{c.name}</Link></li>
                <button onClick={() => {
                    fetchCanvas()
                    removeCanvas(c.name)
                }}>Remove</button>
            </div>

        );
        return (
            <ul>{listItems}</ul>
        );
    }
   return (
       <div>
          <NameInputComponent></NameInputComponent>
           <div>{list()}</div>
       </div>
   )
}


export default FirstPageComponent;
