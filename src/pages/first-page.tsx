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
            <div key={index} className="container mt-2">
                    <div className="row justify-content-center">
                        <div style={{padding: "100px", border: "1px solid blue", borderRadius: "20px" }}>
                            <Link to={`/canvas/${c.name}`}>{c.name}</Link>
                        </div>
                    </div>
                <div className="row justify-content-center">
                    <button className="btn btn-danger" onClick={() => {
                        fetchCanvas()
                        removeCanvas(c.name)
                    }}>Remove</button>
                </div>
            </div>




        );
        return (
            <div>{listItems}</div>
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
