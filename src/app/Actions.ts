"use server";
import axios from "axios";
type data = {
    email: string;
    message: string;
}


export const SubmitData = async (formData: data) => {
    await axios.post("http://localhost:5171/api/messages", {
        email: formData.email,
        message: formData.message
    }).then((res) => {
        console.log(res.status)
    }).catch((err) => {
        console.log(err.data)
    });



}