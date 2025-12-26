import axios from "axios";
import config from "./config";

export async function getAllStationery() {
    const URL = config.BASE_URL + '/user/stationery'
    const response = await axios.get(URL)
    console.log(response)
    return response.data
}