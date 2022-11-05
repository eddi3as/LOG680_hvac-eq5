
import { verifyTemp } from "./utils/tempcal";

import { verifyArgs } from "./utils/argsvalidator";

import signalR = require("@microsoft/signalr");
import fetch = require('node-fetch');

const AC_ON = "lower";
const HEATER_ON = "higher";
const base_url = 'http://159.203.50.71/';
const api = 'api/Hvac/';
let token = 'NQ1JVDCqdg';
let temp_max = 5;
let temp_min = 1;
let ticks = 6;

const args = process.argv; // [token] [limite chaud] [limite froid] [ticks]

let newData = verifyArgs(args);

if(newData.length === 1){
  throw Error('ERROR TOKEN UNDEFINED');
}

token = newData[2];
temp_max = newData[3];
temp_min = newData[4];
ticks = newData[5];

let connection = new signalR.HubConnectionBuilder()
    .withUrl(base_url + "SensorHub?token=" + token)
    .build();

connection.on("ReceiveSensorData", (data: any) => {
    console.log(data);
    if(verifyTemp(data, temp_max, temp_min) === HEATER_ON){
      fetch(base_url + api + token +"/TurnOnHeater/" + ticks)
      .then((result: { json: () => any; }) => result.json())
      .then((textformat: any) => console.log(textformat))
    }
    else if(verifyTemp(data, temp_max, temp_min) === AC_ON){
      fetch(base_url + api+ token + "/TurnOnAc/" + ticks)
      .then((result: { json: () => any; }) => result.json())
      .then((textformat: any) => console.log(textformat))
    }
});

const port = Number.parseInt(process.env.PORT || '3000');
if (Number.isNaN(port)) {
  console.error('PORT must be a number');
  process.exit(1);
}

connection.start();

