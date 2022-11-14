import * as dotenv from 'dotenv';
dotenv.config();/**/
import { verifyTemp } from "./utils/tempcal";
import { verifyArgs } from "./utils/argsvalidator";
import signalR = require("@microsoft/signalr");
import fetch = require('node-fetch');

//require('dotenv').config();//ERROR ESLINT

const AC_ON = "lower";
const HEATER_ON = "higher";
const base_url = 'http://159.203.50.71/';
const api = 'api/Hvac/';
let token = process.env.TOKEN;
let temp_max = parseFloat(process.env.TEMP_MAX);
let temp_min = parseFloat(process.env.TEMP_MIN);
let ticks = parseInt(process.env.TICKS);

const args = process.argv; // [token] [limite chaud] [limite froid] [ticks]

const newData = verifyArgs(args);

if(newData.length === 1){
  throw Error('ERROR TOKEN UNDEFINED');
}

token = newData[2];
temp_max = newData[3];
temp_min = newData[4];
ticks = newData[5];

const connection = new signalR.HubConnectionBuilder()
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

const port = Number.parseInt(process.env.PORT || '4000');
if (Number.isNaN(port)) {
  console.error('PORT must be a number');
  process.exit(1);
}

connection.start();

