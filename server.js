const express = require("express")
const config = require("./config.json")
const app = express()
const mongoose = require("mongoose")
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${config.db.url}/common`, {
    keepAlive: true
});
var cors = require('cors')
app.use(cors())
app.use(express.json())
app.use("/", require("./routes/index"))
app.use("/api/access", require("./routes/api/access"))
app.use("/api/changes", require("./routes/api/changes"))
app.use("/api/microservices", require("./routes/api/microservices"))
/* Listening on the port specified in the config.json file. */
app.listen(config.servicePort, function () {
    console.log(`Now listening on ${config.servicePort}`)
})