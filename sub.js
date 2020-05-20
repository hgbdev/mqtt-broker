var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://localhost:1883", {username: "user1", password: "password"});

client.on("connect", () => {
    client.subscribe("ESP8266/connection/board");

});


client.on("message", (topic, payload, packet) => {
  console.log(payload.toString());
});