import React, {Component, useEffect, useRef, useState} from "react";
import "./canvas.css"
import {deleteCanvas, loadCanvas, saveCanvas} from "../functions/interviu";


const Canvas = (props: any) => {
    const canvasRef = React.useRef(null);
    const [position, setPosition] = React.useState({x: props.position.x, y: props.position.y});



    React.useEffect(() => {
        const canvas = canvasRef.current as any ;
        const ctx = canvas.getContext('2d');
        ctx.moveTo(props.position.x, props.position.y);
    }, []);

    // React.useEffect(() => {
    //
    //     moveLineX()
    // }, [props.position.x])
    // //
    React.useEffect(() => {
        moveLine()
    }, [props.position])

    React.useEffect(() => {
        changeBackgroundColor()
    }, [props.colorBackground])

    React.useEffect(() => {
        changeLineColor()
    }, [props.colorLine])



    const changeLineColor = () => {
        const canvas = canvasRef.current as any ;
        const ctx = canvas.getContext('2d');
        ctx.strokeStyle = props.colorLine;
    }

    const changeBackgroundColor = () => {
        const canvas = canvasRef.current as any ;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle= props.colorBackground;
        ctx.fillRect(0, 0, 360, 360);
    }

    const moveLine = () => {
        const canvas = canvasRef.current as any ;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineTo(props.position.x, props.position.y);
        setPosition({x:props.position.x, y:props.position.y});
        ctx.stroke();
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
            <canvas ref={canvasRef} height={360} width={360}  className={"canvas"}/>
            <button onClick={handleSave}>Save</button>
            <button onClick={loadData}>Load</button>


        </React.Fragment>
        )
};


export default Canvas
