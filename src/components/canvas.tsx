import React from "react";
import "./canvas.css"
import {createCanvas, loadCanvas, updateCanvas} from "../functions/interviu";


 const CanvasComponent = (props: any) => {
    const canvasRef = React.useRef(null);

    React.useEffect(() => {

        const canvas = canvasRef.current as any ;
        const ctx = canvas.getContext('2d');
        loadData()


    }, []);

     const loadData = () => {
         const canvas = canvasRef.current as any ;
         const ctx = canvas.getContext('2d');
         let dataURL: any
         // let dataURL = localStorage.getItem('canvas');
         loadCanvas(props.name).then((data:any) => {
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
             props.position.x = data.data.positionX;
             props.position.y = data.data.positionY;
             ctx.moveTo(props.position.x, props.position.y)

         })
             .catch((err) => console.log('eroare'))

     }
    React.useEffect(() => {
        console.log(props.position)
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
        ctx.stroke();
    }

    const moveLine = () => {
            const canvas = canvasRef.current as any;
            const ctx = canvas.getContext('2d');
            ctx.lineTo(props.position.x, props.position.y);
            ctx.stroke();
        }

     function update() {
        const canvas = canvasRef.current as any ;
        // localStorage.setItem('canvas', canvas.toDataURL())
         updateCanvas(canvas.toDataURL(), props.name, props.position.x,props.position.y, props.backgroundColor, props.lineColor)
            .then(() => console.log('Canvas salvat'),
                (err) => console.log('Error'))
    }





    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12-sm">
                        <canvas ref={canvasRef} height={360} width={360}  className={"canvas"}/>

                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12-sm">
                        <button className="btn btn-primary" onClick={update}>Salvează modificările</button>
                    </div>
                </div>
                {/*<div className="row justify-content-center" >*/}
                {/*    <div className="col-12-sm">*/}
                {/*        <button className="btn btn-primary" onClick={update}>Update</button>*/}

                {/*    </div>*/}
                {/*</div>*/}
            </div>

        </React.Fragment>
        )
};


export default CanvasComponent
