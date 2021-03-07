/* import axios from "axios"; */
const axios = require('axios');
const fs = require('fs');
const url = "https://randomuser.me/api/?results=50&nat=us&inc=picture,name,dob,location,cell,email";

const data = [];
const path = "employees.json";

async function getData(data, path) {
    await axios.get(url).then(response => {
        response.data.results.forEach(employee => {
            data.push(employee);
        });
    });
    try {
        fs.writeFileSync(path, JSON.stringify(data));
    } catch(err) {
        console.error(err);
    }
};

getData(data, path);