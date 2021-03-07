import axios from "axios";
const url = "https://randomuser.me/api/?results=50";

export default {
    search: function() {
        return axios.get(url);
    }
};