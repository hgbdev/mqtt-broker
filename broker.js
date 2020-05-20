const aedes = require("aedes")({
  authenticate: (client, username, password, callback) => {
    if (username === "user1") {
      callback(null, true);
    } else {
      callback(null, false)
    }
  },
});
const server = require("net").createServer(aedes.handle);
const port = 1883;

server.listen(port, function () {
  console.log("server started and listening on port ", port);
});

aedes.on("clientReady", (client) => {
  const { username, password } = client._parser.settings;
  aedes.authenticate(client, username, password, () => {
    console.log("Dang nhap thanh cong");
  });
});

aedes.on("publish", (data) => {
  console.log(data.payload.toString());
});

// var mosca = require("mosca");
// var settings = {
//   port: 1883
// };

// var server = new mosca.Server(settings);

// server.on("ready", function() {
//   console.log("ready");
// });

// server.on("published", (packet) => {
//   console.log(packet.payload.toString());
// });
