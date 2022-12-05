import * as dotenv from 'dotenv';
dotenv.config();/**/
import { verifyTemp } from "./utils/tempcal";
import { verifyArgs } from "./utils/argsvalidator";
import { RespCtrl } from "./controller/respCtrl";
import signalR = require("@microsoft/signalr");
import fetch = require('node-fetch');
import { connectToDatabase } from "./service/database.service";

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

const dataCollector = new RespCtrl();

const connection = new signalR.HubConnectionBuilder()
    .withUrl(base_url + "SensorHub?token=" + token)
    .build();

connection.on("ReceiveSensorData", (data: any) => {
    console.log(data);
    if(verifyTemp(data, temp_max, temp_min) === HEATER_ON){
      fetch(base_url + api + token +"/TurnOnHeater/" + ticks)
      .then((result: { json: () => any; }) => result.json())
      .then(async (textformat: any) => {
        data.msg = textformat.Response;
        console.log(textformat);
        const value = await dataCollector.addEntry(data);
        console.log(value);
      })
    }
    else if(verifyTemp(data, temp_max, temp_min) === AC_ON){
      fetch(base_url + api+ token + "/TurnOnAc/" + ticks)
      .then((result: { json: () => any; }) => result.json())
      .then(async (textformat: any) => {
        data.msg = textformat.Response;
        console.log(textformat);
        const value = await dataCollector.addEntry(data);
        console.log(value);
      })
    }
});

const port = Number.parseInt(process.env.PORT || '4000');
if (Number.isNaN(port)) {
  console.error('PORT must be a number');
  process.exit(1);
}



connectToDatabase().then(()=>{
  console.info(`Serveur disponible à http://localhost:${port}`);
  connection.start();

}).catch((error: Error) => {
  console.error("Database connection failed", error);
  process.exit();
});

