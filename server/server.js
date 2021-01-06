var app = require("express")();
var server = require("http").createServer(app);
var io = require("socket.io")(server);
const mongoose = require("mongoose");
const stocks = require("./routes/stockRoutes");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./socketEvents")(server);

const port = 5000;

app.use(stocks);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.set("socketio", io);

const uri =
  "mongodb+srv://admin:admin1234@investockcluster0.jp2wh.mongodb.net/<stocks_data>?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// io.on("connection", (socket) => {
//   socket.emit("hello", "world");
//   console.log("New Connection");
// });

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
