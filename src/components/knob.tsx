import React, { useState } from 'react'
import { Donut } from 'react-dial-knob'

const  KnobComponent = (props: any) => {
    const [value, setValue] = useState(0)
    return <Donut
        diameter={50}
        min={0}
        max={100}
        step={1}
        value={value}
        theme={{
            donutColor: 'blue'
        }}
        onValueChange={setValue}
        ariaLabelledBy={'my-label'}
    >
        <label id={'my-label'}>{props.label}</label>
    </Donut>
}

export default KnobComponent;

