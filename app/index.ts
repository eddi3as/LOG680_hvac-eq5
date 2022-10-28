const signalR = require("@microsoft/signalr");

let connection = new signalR.HubConnectionBuilder()
    .withUrl("http://159.203.50.71/SensorHub?token=NQ1JVDCqdg")
    .build();

connection.on("ReceiveSensorData", (data: any) => {
    console.log(data);
});



const port = Number.parseInt(process.env.PORT || '3000');
if (Number.isNaN(port)) {
  console.error('PORT must be a number');
  process.exit(1);
}

  
connection.start();
