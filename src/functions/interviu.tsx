import axios from "axios";

export const saveCanvas = async (data: string) => {
    await axios.post(`http://localhost:8000/api/test`, {
        data: data
    })
}

export const deleteCanvas = async () => {
    await axios.delete(`http://localhost:8000/api/test` )
}

export const loadCanvas = async () => {
    const response = await axios.get(`http://localhost:8000/api/test`)
    return response
}
