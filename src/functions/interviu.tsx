import axios from "axios";
import {Canvas} from "../common/test";

export const createCanvas = async (data: string) => {
    await axios.post(`http://localhost:8000/api/test`, {
        data: data
    })
}

export const getAllCanvas = async () => {
    const response: Canvas[] = await axios.get(`http://localhost:8000/api/test`)
    return response
}


export const loadCanvas = async (name: string) => {
    const response: Canvas = await axios.get(`http://localhost:8000/api/test/` + name)
    return response
}

export const updateCanvas = async (canvas: string, name: string, positionX: number,
                                   positionY: number,
                                   backgroundColor: string,
                                   lineColor: string,) => {
    await axios.put(`http://localhost:8000/api/test/` + name, {
        data: canvas,
        positionX: positionX,
        positionY: positionY,
        backgroundColo: backgroundColor,
        lineColor: lineColor,
    })
}

export const removeCanvas = async (name: string) => {
    await axios.delete(`http://localhost:8000/api/test/${name}`)
}
