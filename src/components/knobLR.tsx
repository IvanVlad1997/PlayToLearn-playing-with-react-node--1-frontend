import React, { useState } from 'react'

const  KnobUDComponent = (props: any) => {


     return(
        <React.Fragment>
            <div className="btn-toolbar mb-3 justify-content-center" role="toolbar" aria-label="Toolbar with button groups ">
                <div className="btn-group mr-2" role="group" aria-label="First group">
                    <button onClick={() => {props.sendValueFromChildToParent(-10)}} type="button" className="btn btn-secondary">Stanga</button>
                    <button onClick={() => {props.sendValueFromChildToParent(10)}}type="button" className="btn btn-secondary">Dreapta</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default KnobUDComponent;

