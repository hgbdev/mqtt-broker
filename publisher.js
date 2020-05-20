var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://localhost:1883", {username: "user1", password: "1234"});


client.publish("ESP8266/connection/board", Buffer.from("Mot cai gi do"));