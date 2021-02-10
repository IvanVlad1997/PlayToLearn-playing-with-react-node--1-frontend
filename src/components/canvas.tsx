import React, {Component, useEffect, useRef} from "react";
import "./canvas.css"
import {deleteCanvas, loadCanvas, saveCanvas} from "../functions/interviu";


const Canvas = () => {
    const canvasRef = React.useRef(null);
    const [position, setPosition] = React.useState({x: 5, y: 5});
    // React.useEffect(() => {
    //     setLine()
    // }, []);

    React.useEffect(() => {
        const canvas = canvasRef.current as any ;
        const ctx = canvas.getContext('2d');
        ctx.moveTo(position.x, position.y);
        console.log(position)
    }, []);

    // const setLine = () => {
    //     const canvas = canvasRef.current as any;
    //     const x = canvas.width;
    //     const y = canvas.height;
    //     setPosition({ x, y });
    // }


    const moveLine = () => {
        const canvas = canvasRef.current as any ;
        const ctx = canvas.getContext('2d');
        // ctx.moveTo(0, 0);
        ctx.lineTo(position.x-10, position.y-10);
        setPosition({x:position.x + 100, y:position.y + 100});
        ctx.stroke();
        console.log(position)
        console.log(ctx)
    }


    function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void{
      moveLine()
    }

     function handleSave() {
        const canvas = canvasRef.current as any ;
        console.log(canvas)
        console.log(canvas.toDataURL())
        // localStorage.setItem('canvas', canvas.toDataURL())
         saveCanvas(canvas.toDataURL())
            .then(() => console.log('Canvas salvat'),
                (err) => console.log('Error'))
    }

    const loadData = () => {
        const canvas = canvasRef.current as any ;
        const ctx = canvas.getContext('2d');
        let dataURL: any
        // let dataURL = localStorage.getItem('canvas');
        loadCanvas().then((data) => {
             dataURL = data.data.data
             let img = new Image;
             if (dataURL != null) {
                 img.src = dataURL;
             }
             console.log(dataURL)
             console.log(img)
             img.onload = function () {
                 ctx.drawImage(img, 0, 0);
             };
         })
            .catch((err) => console.log('eroare'))

    }

    return (
        <React.Fragment>
            <canvas ref={canvasRef} height={400} width={400}  className={"canvas"}/>
            <button onClick={handleClick}>Down</button>
            <button onClick={handleSave}>Save</button>
            <button onClick={loadData}>Load</button>

        </React.Fragment>
        )
};


export default Canvas
