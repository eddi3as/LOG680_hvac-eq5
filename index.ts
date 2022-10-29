import { verifyTemp } from "./utils/tempcal";

import signalR = require("@microsoft/signalr");
import fetch = require('node-fetch');
const AC_ON = "lower";
const HEATER_ON = "higher";

const connection = new signalR.HubConnectionBuilder()
    .withUrl("http://159.203.50.71/SensorHub?token=NQ1JVDCqdg")
    .build();

connection.on("ReceiveSensorData", (data: any) => {
    console.log(data);
    if(verifyTemp(data, 5.00, 1.00) === HEATER_ON){
      fetch("http://159.203.50.71/api/Hvac/NQ1JVDCqdg/TurnOnHeater/6")
      .then((result: { json: () => any; }) => result.json())
      .then((textformat: any) => console.log(textformat))
    }
    else if(verifyTemp(data, 5.00, 1.00) === AC_ON){
      fetch("http://159.203.50.71/api/Hvac/NQ1JVDCqdg/TurnOnAc/6")
      .then((result: { json: () => any; }) => result.json())
      .then((textformat: any) => console.log(textformat))
    }
});/*
To start the AC of the unit : GET {serverUrl}/api/Hvac/{token}/TurnOnAc/{nbTicks}
To start the Heater of the unit : GET {serverUrl}/api/Hvac/{token}/TurnOnHeater/{nbTicks}
*/



const port = Number.parseInt(process.env.PORT || '3000');
if (Number.isNaN(port)) {
  console.error('PORT must be a number');
  process.exit(1);
}

  
connection.start();
